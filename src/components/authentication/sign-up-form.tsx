'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthenticationForm } from '@/components/authentication/authentication-form';
import { signup } from '@/app/signup/actions';
import { useToast } from '@/components/ui/use-toast';

export function SignupForm() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignup() {
    signup({ email, password }).then((data) => {
      if (data?.error) {
        toast({
          description: data.message || 'Algo salió mal. Intenta de nuevo',
          variant: 'destructive'
        });
      }
      // No need for success message since we redirect immediately
    });
  }

  return (
    <form action={'#'} className={'gap-6 flex flex-col items-center justify-center w-full'}>
      <div className={'text-xl font-bold tracking-tight text-center text-foreground'}>
        crea tu cuenta
      </div>
      <AuthenticationForm
        email={email}
        onEmailChange={(email) => setEmail(email)}
        password={password}
        onPasswordChange={(password) => setPassword(password)}
      />
      <Button formAction={() => handleSignup()} type={'submit'} className={'w-full bg-primary text-primary-foreground hover:bg-primary/90'}>
        Registrarse
      </Button>
    </form>
  );
}
