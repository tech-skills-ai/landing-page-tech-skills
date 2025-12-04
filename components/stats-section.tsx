export function StatsSection() {
  const stats = [
    { value: "80%", label: "Redução no tempo de triagem" },
    { value: "24/7", label: "Disponibilidade do agente" },
    { value: "10x", label: "Mais candidatos processados" },
    { value: "95%", label: "Taxa de satisfação" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
