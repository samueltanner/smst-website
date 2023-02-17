import { ImageWithOverlay } from './outlines/ImageWithOverlay'
import { MeOutline } from './outlines/MeOutline'
import { SectionAdvancer } from './SectionAdvancer'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { UpOutline } from './outlines/UpOutline'
export const AboutMeSection = () => {
  const [sectionIndex, setSectionIndex] = useState(0)
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-offWhite p-24">
      {sectionIndex === 0 && <ABitABoutMe />}
      {sectionIndex === 1 && <WhatIveBuilt />}

      <div className="pt-8">
        <SectionAdvancer
          pages={3}
          sectionIndex={sectionIndex}
          setSectionIndex={setSectionIndex}
        />
      </div>
    </div>
  )
}

const ABitABoutMe = () => {
  return (
    <div className="relative grid h-1/2 w-full grid-cols-2 bg-primary bg-opacity-30 p-0">
      <p className="absolute -top-8 -right-8 font-primary text-6xl font-extrabold text-primary">
        A BIT ABOUT ME
      </p>
      <p className="text-md -ml-8 flex items-center font-primary font-light text-zinc-900">
        Hi there, I&apos;m Sam Tanner, and throughout my career, I&apos;ve
        donned many hats: salesman, entrepreneur (multiple times over),
        chocolatier, barista, digital designer, and web developer, to name a
        few.
        <br />
        <br />
        It took me 28 years to realize that my resume is not a scattered mess;
        it&apos;s a testament to my unrelenting drive to create. You see, I
        don&apos;t just like building things - I live for it. Taking ideas and
        turning them into beautiful realities is what gets me out of bed in the
        morning.
      </p>

      <div className="flex items-end justify-center">
        <ImageWithOverlay
          src="/img/threshold_me.png"
          className={'object-contain'}
        >
          <MeOutline
            className={
              'absolute h-full w-full fill-current object-contain text-secondary opacity-40'
            }
          />
        </ImageWithOverlay>
      </div>
    </div>
  )
}

const WhatIveBuilt = () => {
  return (
    <div className="relative grid h-1/2 w-full grid-cols-2 bg-primary bg-opacity-30 p-0">
      <p className="absolute -top-8 -left-8 font-primary text-6xl font-extrabold text-primary">
        What I&apos;ve Built
      </p>

      <div className="flex items-center justify-center pt-6">
        <ImageWithOverlay
          src="/img/UpThreshold.png"
          className={'h-20 -rotate-6 transform object-contain p-10'}
        >
          <UpOutline
            className={
              'absolute h-full w-full -rotate-2 transform fill-current object-contain p-10 text-green-900 opacity-40'
            }
          />
          {/* <MeOutline
            className={
              'absolute h-full w-full fill-current object-contain text-secondary opacity-40'
            }
          /> */}
        </ImageWithOverlay>
      </div>

      <p className="text-md -mr-12 flex items-center font-primary font-light text-zinc-900 ">
        I have had the opportunity to work on a number of exciting projects with
        fabulous people. Recently, I have worked as a frontend software
        developer, building a user interface for the financial technology
        company, including the not-so-easy task of leading and implementing a
        data visualization system.
        <br />
        <br />
        Before FinTech, I worked for a small Dairy Tech company where I was both
        a developer and a project manager. Our team built applications that
        helped track and manage dairy cattle. It was udderly unique developer
        role.
        <button className="group absolute bottom-12  flex w-1/2 justify-center text-justify font-primary font-extrabold text-primary">
          <p className="z-10 border-b-[4px] border-b-secondary border-opacity-60 text-justify group-hover:border-opacity-100">
            Check Out My Portfolio
          </p>
        </button>
      </p>
    </div>
  )
}
