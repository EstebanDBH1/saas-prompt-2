import Link from 'next/link';
import { SignupForm } from '@/components/authentication/sign-up-form';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            únete al banco
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            comienza a vender tus prompts hoy
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-xl backdrop-blur-sm">
          <SignupForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground bg-background px-2">¿ya tienes cuenta? </span>
            <Link href="/login" className="text-primary hover:underline">
              entra aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
