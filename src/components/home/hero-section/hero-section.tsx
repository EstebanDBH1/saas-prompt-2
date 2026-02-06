import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className={'mx-auto max-w-4xl px-6 md:px-8 relative flex flex-col items-center justify-center mt-16 md:mt-24 mb-12 md:mb-20'}>
      <div className={'text-center w-full'}>
        {/* Highlight Badge */}
        <div className="mb-4 md:mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs md:text-sm text-primary">
          Prompts probados · Actualizados · Listos para usar
        </div>

        {/* Main Title */}
        <h1 className={'text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] tracking-tight font-bold text-foreground mb-4 md:mb-6'}>
          Convierte la IA en una <span className="text-primary">ventaja real</span>
        </h1>

        {/* Subtitle */}
        <p className={'text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10'}>
          Accede a un banco de prompts diseñados para pensar mejor, trabajar más rápido y obtener mejores resultados.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base px-6 md:px-8 h-11 md:h-12 rounded-md font-medium" asChild>
            <Link href="/#pricing">Ver planes</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm md:text-base px-6 md:px-8 h-11 md:h-12 rounded-md border-border hover:bg-muted/50 text-foreground" asChild>
            <Link href="/dashboard">Explorar ejemplos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
