import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
export const PortfolioCard = ({ project, index, selectedCard }) => {
  return (
    <div className="group h-full w-full rounded-xl bg-offWhite text-primary ring-4 ring-secondary drop-shadow-lg transition duration-200 ease-in-out hover:scale-[102%] hover:transform">
      <div className="absolute z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-900 bg-opacity-50">
        <span className="flex h-full w-full items-center gap-2 md:justify-center">
          <p className="ml-8 w-full font-primary text-2xl font-bold text-white md:w-fit">
            {project.title}
          </p>

          <span className="mr-8 flex h-full items-center justify-center">
            <FiArrowRight className="mt-0.5 h-6 w-6 stroke-[3px] text-white opacity-0  transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          </span>
        </span>
      </div>
      <Image
        src={project.images[0]}
        fill
        className="relative mx-auto overflow-hidden rounded-xl bg-offWhite object-cover"
        alt={project.title}
      />
    </div>
  )
}
