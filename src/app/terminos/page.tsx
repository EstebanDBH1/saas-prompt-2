export default function TerminosPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-6 md:px-8 py-12 md:py-20">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
                    Términos y Condiciones
                </h1>

                <div className="prose prose-sm md:prose-base prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground mb-6">
                        Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Al acceder y utilizar Banco de Prompts, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">2. Descripción del Servicio</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            Banco de Prompts proporciona acceso a una biblioteca de prompts diseñados para uso con herramientas de inteligencia artificial. El servicio incluye:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
                            <li>Acceso a prompts organizados por categorías</li>
                            <li>Actualizaciones regulares de contenido</li>
                            <li>Soporte según el plan contratado</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">3. Suscripciones y Pagos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            Los planes de suscripción se renuevan automáticamente según la frecuencia seleccionada (mensual o anual). Puedes cancelar tu suscripción en cualquier momento desde tu panel de control.
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Los pagos se procesan de forma segura a través de Paddle. No almacenamos información de tarjetas de crédito en nuestros servidores.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">4. Uso Aceptable</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            Te comprometes a utilizar el servicio únicamente para fines legales y de acuerdo con estos términos. No está permitido:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
                            <li>Redistribuir o revender los prompts sin autorización</li>
                            <li>Compartir tu cuenta con terceros</li>
                            <li>Utilizar el servicio para actividades ilegales o no éticas</li>
                            <li>Intentar acceder a áreas restringidas del servicio</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">5. Propiedad Intelectual</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Todos los prompts, contenidos y materiales disponibles en Banco de Prompts son propiedad de la empresa o sus licenciantes. Se te otorga una licencia limitada, no exclusiva y no transferible para usar los prompts según tu plan de suscripción.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">6. Cancelación y Reembolsos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Puedes cancelar tu suscripción en cualquier momento. La cancelación será efectiva al final del período de facturación actual. No ofrecemos reembolsos por períodos parciales de suscripción.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">7. Limitación de Responsabilidad</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Banco de Prompts se proporciona &quot;tal cual&quot; sin garantías de ningún tipo. No nos hacemos responsables de los resultados obtenidos al utilizar nuestros prompts con herramientas de IA de terceros.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">8. Modificaciones</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos se comunicarán por correo electrónico con al menos 30 días de anticipación.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Para cualquier pregunta sobre estos términos, contáctanos en{' '}
                            <a href="mailto:hola@bancodeprompts.com" className="text-primary hover:underline">
                                hola@bancodeprompts.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
