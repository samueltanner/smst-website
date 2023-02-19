import { Header } from '../components/Header'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolio_data } from '../lib/data'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Portfolio() {
  const [selectedCard, setSelectedCard] = useState(false)

  const handleSelectCard = (index) => {
    if (selectedCard === index) {
      setSelectedCard(null)
    } else {
      setSelectedCard(index)
    }
  }
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-scroll">
      <Header sticky={true} />
      <div className="flex w-full flex-wrap justify-center gap-8 py-8">
        {portfolio_data.map((project, index) => (
          <motion.div
            key={index}
            className={`h-[400px] w-[80%] min-w-[300px] md:w-[45%] ${
              selectedCard === index ? '' : ''
            }`}
            onClick={() => {
              handleSelectCard(index)
            }}
          >
            <PortfolioCard
              project={project}
              index={index}
              selectedCard={selectedCard}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
