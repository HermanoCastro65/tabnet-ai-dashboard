export default function Features() {
  const features = [
    {
      title: 'Dashboards Interativos',
      desc: 'Crie automaticamente gráficos e visualizações a partir de dados do TabNet.',
    },
    {
      title: 'Insights com Inteligência Artificial',
      desc: 'Identifique padrões, tendências e relações em dados de saúde pública.',
    },
    {
      title: 'Modelos Preditivos',
      desc: 'Utilize machine learning para gerar previsões e análises avançadas.',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="
            bg-white 
            p-8 
            rounded-xl 
            shadow-sm
            border
            border-transparent
            transition-all
            duration-300
            hover:border-yellow-400
            hover:-translate-y-2
            hover:shadow-xl
            cursor-default
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">{f.title}</h3>

            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
