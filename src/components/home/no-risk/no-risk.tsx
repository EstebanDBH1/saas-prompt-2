import { Check } from 'lucide-react';

export function NoRisk() {
    const benefits = [
        'Cancela cuando quieras',
        'Sin contratos',
        'Nuevos prompts incluidos',
    ];

    return (
        <section className="mx-auto max-w-3xl px-6 md:px-8 py-12 md:py-16">
            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    Acceso inmediato. Sin riesgos.
                </h2>
            </div>

            <div className="grid gap-3 max-w-md mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm md:text-base">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
