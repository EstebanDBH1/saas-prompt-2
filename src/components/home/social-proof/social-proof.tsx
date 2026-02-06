export function SocialProof() {
    const audiences = [
        'Creadores digitales',
        'Freelancers',
        'Emprendedores',
        'Profesionales de marketing y tecnología',
    ];

    return (
        <section className="mx-auto max-w-3xl px-6 md:px-8 py-12 md:py-16 text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6 md:mb-8">
                Usado por personas que construyen con IA
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {audiences.map((audience, index) => (
                    <span
                        key={index}
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/50 border border-border text-xs md:text-sm text-muted-foreground"
                    >
                        {audience}
                    </span>
                ))}
            </div>
        </section>
    );
}
