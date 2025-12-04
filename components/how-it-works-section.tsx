export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Configure sua vaga",
      description: "Defina os requisitos, perguntas e critérios de avaliação para a posição.",
    },
    {
      number: "02",
      title: "Compartilhe o link",
      description: "Envie o link da entrevista para seus candidatos por e-mail ou redes sociais.",
    },
    {
      number: "03",
      title: "Agente conduz a entrevista",
      description: "Nosso agente de IA entrevista cada candidato de forma personalizada via WhatsApp.",
    },
    {
      number: "04",
      title: "Receba os melhores",
      description: "Analise o ranking de candidatos e suas respostas no dashboard interativo.",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">Como funciona</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Em 4 passos simples, transforme seu processo de recrutamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
