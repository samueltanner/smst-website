import { Header } from '../components/Header'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolio_data } from '../lib/data'
export default function Portfolio() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-scroll">
      <Header sticky={true} />
      <div className="flex w-full flex-wrap justify-center gap-8 py-8">
        {portfolio_data.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
