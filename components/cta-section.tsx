import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Pronto para revolucionar seu recrutamento?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Junte-se às empresas que já estão economizando tempo e encontrando talentos melhores com o Tech Skills.
              Agende uma demonstração gratuita.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
