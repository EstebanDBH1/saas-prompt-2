import { LoginGradient } from '@/components/gradients/login-gradient';
import '../../styles/login.css';
import { LoginForm } from '@/components/authentication/login-form';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* <LoginGradient /> remove gradient for cleaner dark look or keep it if subtle */}

      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            inicia sesión
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            accede a tu banco de prompts
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-xl backdrop-blur-sm">
          <div className="space-y-4">
            <Button variant="outline" className="w-full h-11 border-border bg-background hover:bg-muted" disabled>
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.17c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.54z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              continuar con google (no disponible)
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">o</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full h-11" asChild>
              <Link href="/login/email">continuar con email</Link>
            </Button>
          </div>

          {/* If we want the actual form inline: */}
          <div className="mt-6">
            {/* For now hiding the actual LoginForm component unless requested, as screenshot implies a choice first. But let's check what LoginForm does. */}
            {/* <LoginForm /> */}
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">¿no tienes cuenta? </span>
            <Link href="/signup" className="text-primary hover:underline">regístrate</Link>
          </div>
        </div>

        <p className="px-8 text-center text-xs text-muted-foreground">
          al iniciar sesión aceptas nuestros términos de servicio
        </p>
      </div>
    </div>
  );
}
