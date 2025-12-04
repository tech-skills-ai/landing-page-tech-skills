import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Tech Skills</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Sobre
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Demo
            </a>
            <a
              href="#funcionalidades"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Funcionalidades
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tech Skills. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
