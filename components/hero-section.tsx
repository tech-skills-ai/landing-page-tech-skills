import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Recrutamento Inteligente via WhatsApp</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            O futuro do recrutamento <span className="text-primary">começa aqui</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Automatize suas entrevistas com IA. Nosso agente inteligente conduz todo o processo seletivo diretamente
            pelo WhatsApp, economizando tempo e encontrando os melhores talentos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
              Solicitar Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 h-12 text-base bg-transparent"
            >
              Ver em Ação
            </Button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          <div className="relative bg-card border border-border rounded-2xl p-4 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="bg-secondary rounded-2xl rounded-tl-none p-4 max-w-md">
                  <p className="text-foreground text-sm">
                    Olá! Sou o assistente de recrutamento da Tech Skills. Estou aqui para conduzir sua entrevista para a
                    vaga de Desenvolvedor Full Stack. Podemos começar?
                  </p>
                </div>
                <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 max-w-md ml-auto">
                  <p className="text-foreground text-sm">Olá! Sim, podemos começar. Estou pronto para a entrevista.</p>
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-none p-4 max-w-md">
                  <p className="text-foreground text-sm">
                    Ótimo! Me conte um pouco sobre sua experiência com desenvolvimento web e quais tecnologias você
                    domina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
