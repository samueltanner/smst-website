import { SectionAdvancer } from './SectionAdvancer'
import { useState } from 'react'
import { variants } from '../lib/data'

export const AboutMeSection = () => {
  const [sectionIndex, setSectionIndex] = useState(0)

  if (!variants) return <></>

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-offWhite p-24">
      <div className="relative grid h-1/2 w-full grid-cols-2 bg-primary bg-opacity-30 p-0">
        <p
          className={`absolute ${variants[sectionIndex].position} font-primary text-6xl font-extrabold text-primary`}
          // variants={textVariants}
          initial="initial"
          animate={sectionIndex === 1 ? 'target' : 'initial'}
          exit="initial"
          transition={{ duration: 0.5 }}
        >
          {variants[sectionIndex].title}
        </p>
        <div
          className={`text-md flex flex-col items-center justify-center gap-4 font-primary font-light text-zinc-900 ${
            sectionIndex % 2 === 0 ? 'order-1 -ml-8' : 'order-2 -mr-12'
          }`}
        >
          <div>
            {variants[sectionIndex].body.map((paragraph, index) => (
              <div className="mb-4" key={index}>
                <p className="">{paragraph}</p>
              </div>
            ))}
            {variants[sectionIndex]?.button && (
              <button className="group absolute bottom-28  flex w-1/2 justify-center text-justify font-primary font-extrabold text-primary">
                <p className="z-10 border-b-[4px] border-b-secondary border-opacity-60 text-justify group-hover:border-opacity-100">
                  {variants[sectionIndex].button.text}
                </p>
              </button>
            )}
          </div>
        </div>
        <div
          className={`${
            sectionIndex % 2 === 0 ? 'order-2' : 'order-1'
          } flex items-center justify-center pt-6`}
        >
          {variants[sectionIndex].image}
        </div>
      </div>

      <div className="pt-8">
        <SectionAdvancer
          pages={variants.length}
          sectionIndex={sectionIndex}
          setSectionIndex={setSectionIndex}
        />
      </div>
    </div>
  )
}
