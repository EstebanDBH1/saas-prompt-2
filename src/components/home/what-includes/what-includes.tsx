import { Check } from 'lucide-react';

export function WhatIncludes() {
    const features = [
        'Prompts organizados por objetivo',
        'Casos reales: trabajo, negocio, contenido',
        'Frameworks reutilizables',
        'Actualizaciones constantes',
    ];

    return (
        <section className="mx-auto max-w-4xl px-6 md:px-8 py-12 md:py-20">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                    Todo lo que necesitas. En un solo lugar.
                </h2>
            </div>

            <div className="grid gap-3 md:gap-4 max-w-2xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm md:text-base">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                    </div>
                ))}
            </div>

            <p className="text-center text-xs md:text-sm text-muted-foreground/70 mt-8 md:mt-10 italic">
                Diseñado para personas que usan IA en serio.
            </p>
        </section>
    );
}
