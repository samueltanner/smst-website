import { Header } from '../components/Header'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolio_data } from '../lib/data'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Portfolio() {
  const [selectedCard, setSelectedCard] = useState(false)

  const cardVariants = {
    selected: {
      rotateY: 180,
      // x: '50%',
      scale: 1,
      transition: { duration: 0.35, delay: 0 },
      zIndex: 20,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },
    notSelected: (i) => ({
      rotateY: i * 15,
      scale: 1 - Math.abs(i * 0.15),
      x: i ? i * 50 : 0,
      zIndex: 10 - Math.abs(i),
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      transition: { duration: 0.35 },
    }),
  }

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
            variants={cardVariants}
            animate={selectedCard === index ? 'selected' : 'notSelected'}
            custom={selectedCard === index ? selectedCard : 0}
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
