import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Banco de Prompts</h3>
            <p className="text-xs text-muted-foreground">
              Prompts diseñados para pensar mejor, trabajar más rápido y obtener mejores resultados.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Contacto</h3>
            <p className="text-xs text-muted-foreground">
              ¿Preguntas? Escríbenos a{' '}
              <a href="mailto:hola@bancodeprompts.com" className="text-primary hover:underline">
                hola@bancodeprompts.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Banco de Prompts. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
