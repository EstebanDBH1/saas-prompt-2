export default function PrivacidadPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-6 md:px-8 py-12 md:py-20">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
                    Política de Privacidad
                </h1>

                <div className="prose prose-sm md:prose-base prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground mb-6">
                        Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">1. Información que Recopilamos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            Recopilamos la siguiente información cuando utilizas Banco de Prompts:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
                            <li><strong>Información de cuenta:</strong> Nombre, correo electrónico y contraseña</li>
                            <li><strong>Información de pago:</strong> Procesada y almacenada por Paddle (no almacenamos datos de tarjetas)</li>
                            <li><strong>Datos de uso:</strong> Prompts accedidos, frecuencia de uso y preferencias</li>
                            <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador y sistema operativo</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">2. Cómo Utilizamos tu Información</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            Utilizamos la información recopilada para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
                            <li>Proporcionar y mantener nuestro servicio</li>
                            <li>Procesar pagos y gestionar suscripciones</li>
                            <li>Enviar actualizaciones sobre el servicio y nuevos prompts</li>
                            <li>Mejorar la experiencia del usuario y desarrollar nuevas funcionalidades</li>
                            <li>Detectar y prevenir fraudes o abusos del servicio</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">3. Compartir Información</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            No vendemos tu información personal. Compartimos información únicamente con:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
                            <li><strong>Paddle:</strong> Para procesar pagos de forma segura</li>
                            <li><strong>Supabase:</strong> Para almacenamiento de datos y autenticación</li>
                            <li><strong>Proveedores de servicios:</strong> Que nos ayudan a operar el servicio bajo estrictos acuerdos de confidencialidad</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">4. Seguridad de los Datos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal. Esto incluye encriptación de datos en tránsito y en reposo, acceso restringido a información personal y auditorías de seguridad regulares.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">5. Cookies y Tecnologías Similares</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Utilizamos cookies esenciales para el funcionamiento del servicio, como mantener tu sesión activa. No utilizamos cookies de seguimiento de terceros para publicidad.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">6. Tus Derechos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            Tienes derecho a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
                            <li>Acceder a tu información personal</li>
                            <li>Corregir datos inexactos</li>
                            <li>Solicitar la eliminación de tu cuenta y datos</li>
                            <li>Exportar tus datos en un formato legible</li>
                            <li>Oponerte al procesamiento de tus datos para ciertos fines</li>
                        </ul>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3">
                            Para ejercer estos derechos, contáctanos en{' '}
                            <a href="mailto:privacidad@bancodeprompts.com" className="text-primary hover:underline">
                                privacidad@bancodeprompts.com
                            </a>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">7. Retención de Datos</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Conservamos tu información personal mientras tu cuenta esté activa o según sea necesario para proporcionarte el servicio. Cuando canceles tu cuenta, eliminaremos tu información personal dentro de 30 días, excepto cuando la ley requiera su conservación.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">8. Transferencias Internacionales</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Tus datos pueden ser transferidos y procesados en servidores ubicados fuera de tu país de residencia. Garantizamos que estas transferencias cumplen con las leyes de protección de datos aplicables.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">9. Menores de Edad</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Nuestro servicio no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">10. Cambios a esta Política</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos por correo electrónico o mediante un aviso destacado en nuestro servicio.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">11. Contacto</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Para preguntas sobre esta política de privacidad o el tratamiento de tus datos, contáctanos en{' '}
                            <a href="mailto:privacidad@bancodeprompts.com" className="text-primary hover:underline">
                                privacidad@bancodeprompts.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
