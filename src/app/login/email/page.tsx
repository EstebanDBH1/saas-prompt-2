import Link from 'next/link';
import { LoginForm } from '@/components/authentication/login-form';

export default function LoginEmailPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-sm space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        join prompt bank
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        login with email
                    </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-xl backdrop-blur-sm">
                    <LoginForm />

                    <div className="mt-6 text-center text-sm">
                        <Link href="/login" className="text-muted-foreground hover:text-foreground">
                            &larr; back to login options
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
