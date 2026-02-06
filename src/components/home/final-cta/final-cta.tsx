import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCTA() {
    return (
        <section className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24 text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4">
                Empieza a usar IA con ventaja
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-lg mx-auto">
                Menos prueba y error. Más claridad y resultados.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base px-8 md:px-10 h-11 md:h-12 rounded-md font-medium" asChild>
                <Link href="/#pricing">Desbloquear acceso</Link>
            </Button>
        </section>
    );
}
