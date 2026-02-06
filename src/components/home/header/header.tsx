import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';

interface Props {
  user: User | null;
}

export default function Header({ user }: Props) {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl relative px-[32px] py-[18px] flex items-center justify-between">
        <div className="flex flex-1 items-center justify-start">
          <Link className="flex items-center gap-2" href={'/'}>
            <span className="text-xl font-bold tracking-tighter text-primary">BANCO DE PROMPTS 🦊</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="flex space-x-4">
            {user?.id ? (
              <Button variant={'secondary'} asChild={true}>
                <Link href={'/dashboard'}>Panel</Link>
              </Button>
            ) : (
              <Button asChild={true} variant={'outline'} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={'/login'}>Entrar</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
