import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
export const PortfolioCard = ({ project, index, selectedCard }) => {
  const [cardBackVisible, setCardBackVisible] = useState(false)
  useEffect(() => {
    const backgroundTimeout = () => {
      setTimeout(() => {
        // setCardBackVisible(true)
      }, 350 / 2)
    }
    // if (selectedCard && selectedCard === index) {
    //   backgroundTimeout()
    // } else {
    // }

    return () => backgroundTimeout()
  }, [selectedCard, index])
  return (
    <div className="group h-full w-full rounded-lg border-[4px] border-primary bg-offWhite text-primary drop-shadow-lg ">
      {!cardBackVisible && (
        <>
          <div className="absolute z-10 flex h-full w-full items-center justify-center bg-zinc-900 bg-opacity-50 ">
            <span className="flex h-full w-full items-center gap-2 md:justify-center">
              <p className="ml-8 w-1/2 font-primary text-2xl font-bold text-white md:w-fit">
                {project.title}
              </p>

              <span className="flex h-full items-center justify-center">
                <FiArrowRight className="mt-1 h-6 w-6 stroke-[3px] text-white opacity-0  transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
              </span>
            </span>
          </div>
          <Image
            src={project.images[0]}
            fill
            className="object-cover"
            alt={project.title}
          />
        </>
      )}
    </div>
  )
}
