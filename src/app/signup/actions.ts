'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

interface FormData {
  email: string;
  password: string;
}

export async function signup(data: FormData) {
  const supabase = await createClient();

  // Try to create user with admin API to avoid email sending
  // This requires SUPABASE_SERVICE_ROLE_KEY in environment
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (serviceRoleKey) {
    // Use admin client to create user without email confirmation
    const { createClient: createAdminClient } = await import('@supabase/supabase-js');
    const adminClient = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const { error: adminError } = await adminClient.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true, // Auto-confirm email
    });

    if (adminError) {
      console.error('Admin signup error:', adminError);
      return { error: true, message: adminError.message };
    }

    // Now sign in the user
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (signInError) {
      return { error: true, message: signInError.message };
    }
  } else {
    // Fallback to regular signup (will send email)
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.error('Signup error:', error);

      if (error.status === 429) {
        return {
          error: true,
          message: 'Límite de emails alcanzado. Contacta al administrador para activar tu cuenta manualmente.'
        };
      }

      return { error: true, message: error.message };
    }
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}
