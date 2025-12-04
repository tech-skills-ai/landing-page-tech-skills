import { Bot, Clock, MessageCircle, BarChart3, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "IA Conversacional Avançada",
      description:
        "Nosso agente utiliza modelos de linguagem de última geração para conduzir conversas naturais e avaliar candidatos com precisão.",
    },
    {
      icon: MessageCircle,
      title: "Integração WhatsApp",
      description:
        "Entrevistas realizadas diretamente no WhatsApp, onde seus candidatos já estão. Sem downloads, sem fricção.",
    },
    {
      icon: Clock,
      title: "Disponível 24/7",
      description:
        "O agente trabalha o tempo todo. Candidatos podem ser entrevistados a qualquer hora, em qualquer fuso horário.",
    },
    {
      icon: BarChart3,
      title: "Analytics Detalhado",
      description: "Dashboard completo com métricas de desempenho, análise de respostas e ranking de candidatos.",
    },
    {
      icon: Shield,
      title: "Segurança & LGPD",
      description: "Dados protegidos e em conformidade com a LGPD. Privacidade dos candidatos é nossa prioridade.",
    },
    {
      icon: Zap,
      title: "Setup Rápido",
      description: "Configure seu processo seletivo em minutos. Crie perguntas personalizadas e comece a entrevistar.",
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Tudo que você precisa para <span className="text-primary">recrutar melhor</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa que transforma seu processo de recrutamento com tecnologia de ponta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
