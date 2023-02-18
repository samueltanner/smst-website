import { SectionAdvancer } from './SectionAdvancer'
import { useState, useContext, useEffect } from 'react'
import ThemeContext from './theme/themeContext'
import { ImageWithOverlay } from '../components/outlines/ImageWithOverlay'
import { MeOutline } from '../components/outlines/MeOutline'
import { UpOutline } from '../components/outlines/UpOutline'
import { MarkNMe } from '../components/outlines/MarkNMe'
import { TessNMe } from '../components/outlines/TessNMe'
import { MarkHatOutline } from './outlines/MarkHatOutline'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

const sam_variants = [
  {
    title: 'A Bit About Me',
    body: [
      "Hi there, I'm Sam Tanner. Throughout my career, I've donned many hats: salesman, entrepreneur (multiple times over), chocolatier, barista, digital designer, and web developer, to name a few.",
      "It took me 28 years to realize that my resume is not a scattered mess; it's a testament to my unrelenting drive to create. You see, I don't just like building things - I live for it. Taking ideas and turning them into beautiful realities is what gets me out of bed in the morning.",
    ],
    image: (
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
    ),
    position: '-top-6 right-2 md:-top-8 md:-right-8',
    button: {
      text: 'See My Resume',
      link: '/resume',
    },
  },
  {
    title: "What I've Built",
    body: [
      'I have had the opportunity to work on a number of exciting projects with fabulous people. Recently, I have worked as one (of two) frontend software developers, building a user interface for the financial technology company, including the not-so-easy task of leading and implementing our data visualization system.',

      'Before FinTech, I worked for a small Dairy Tech company where I was both a developer and a project manager. Our team built applications that helped track and manage dairy cattle. It was udderly unique experience.',
    ],
    image: (
      <ImageWithOverlay
        src="/img/UpThreshold.png"
        className={'h-20 -rotate-6 transform object-contain p-4 md:-ml-4'}
      >
        <UpOutline
          className={
            'absolute -ml-4 h-full w-full -rotate-2 transform fill-current object-contain p-4 text-emerald-900 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-top-6 right-2 md:-top-8 md:-left-8',
    button: {
      text: 'Check Out My Portfolio',
      link: '/portfolio',
    },
  },
  {
    title: 'My Hobbies',
    body: [
      'I am an active and social guy. I love to explore new places, and meet new people. I grew up backpacking through the Cascades and the Olympics with my dad and to this day, backpacking is one of my favorite things to do. To date, a few of my favorite places I have hiked are the South Island of New Zealand, the Albanian Alps, and the North Cascades.',
      'When I am not in the back country, I like to spend my time traveling with my fiance, Tess, and our dog, Mark. We are a food-obsessed trio and we always have a trip on the books so we can see new cities, try new restaurants and cuisines, and catch our favorite bands in concert.',
    ],
    image: (
      <ImageWithOverlay
        src="/img/tessNME.png"
        className={'rotate-4 transform object-contain'}
      >
        <TessNMe
          className={
            'absolute h-full w-full -rotate-2 transform fill-current object-contain text-orange-500 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-top-6 right-2 md:-bottom-4 md:-left-8 md:top-auto',
  },
  {
    title: "What's Next?",
    body: [
      'I love the frontend. I love working with design teams, and I love turning ideas into pixel-perfect realizations. I am looking to join a team of passionate, creative, and driven individuals who are looking to build something interesting, powerful, and fun.',
      'My goal is to continue building things with people who are equally determined and spirited as I am. I am in search of a position that will continue to challenge and excite me as a developer, a leader, and a team-member.',
    ],
    image: (
      <ImageWithOverlay
        src="/img/marknme.png"
        className={'h-20 -rotate-2 transform object-contain'}
      >
        <MarkNMe
          className={
            'absolute h-full w-full rotate-2 transform fill-current object-contain text-yellow-600 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-top-6 right-2 md:-bottom-4 md:-right-8',
    button: {
      text: 'Reach Out To Me!',
      link: '/contact',
    },
  },
]

const mark_variants = [
  {
    title: 'Oh Hi Mark',
    body: [
      'My name is Mark. I am an 80 lb. Golden Retriever.',
      "I love eating goose poop. I am lazy as they come and I am not too bright but I promise I love you so much and I don't even know you yet!",
    ],
    image: (
      <ImageWithOverlay
        src="/img/markhat.png"
        className={'-rotate-4 h-20 transform object-contain p-2'}
      >
        <MarkHatOutline
          className={
            'absolute h-full w-full rotate-3 transform fill-current object-contain p-2 text-yellow-800 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-top-6 right-2 md:-bottom-4 md:-right-8',
  },
]

export const AboutMeSection = () => {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [variants, setVariants] = useState(sam_variants)
  const { theme } = useContext(ThemeContext)
  const router = useRouter()

  useEffect(() => {
    if (theme === 'mark') {
      setVariants(mark_variants)
    } else {
      setVariants(sam_variants)
    }
  }, [theme])

  if (!variants) return <></>

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-offWhite px-8 py-16 md:p-24">
      <div className="] relative z-10 grid h-fit min-h-[50%] w-full bg-primary bg-opacity-30 p-8 md:max-h-full md:grid-cols-2 md:p-0 md:py-12">
        <p
          className={`absolute ${variants[sectionIndex]?.position} whitespace-nowrap font-primary text-4xl font-extrabold text-secondary md:text-6xl`}
        >
          {variants[sectionIndex]?.title}
        </p>
        <div
          className={`text-md mb-4 mt-4 flex flex-col justify-center gap-4 overflow-y-scroll font-primary font-light text-zinc-900 md:items-center md:justify-center ${
            sectionIndex % 2 === 0
              ? 'md:order-1 md:-ml-8'
              : 'md:order-2 md:-mr-12'
          }`}
        >
          <div className="z-10">
            {variants[sectionIndex]?.body.map((paragraph, index) => (
              <div className="mb-4" key={index}>
                <p className="">{paragraph}</p>
              </div>
            ))}
            {variants[sectionIndex]?.button && (
              <button
                className="wp group absolute inset-x-0 bottom-0 flex max-w-full justify-center pb-3 text-justify font-primary font-extrabold text-secondary transition duration-100 ease-in-out hover:scale-105"
                onClick={() => router.push(variants[sectionIndex]?.button.link)}
              >
                <p className="z-10 border-b-[4px] border-b-primary border-opacity-60 text-justify group-hover:border-opacity-100">
                  {variants[sectionIndex]?.button.text}
                </p>
              </button>
            )}
          </div>
        </div>
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`hidden md:flex ${
            sectionIndex % 2 === 0 ? 'md:order-2' : 'md:order-1'
          } flex items-center justify-center`}
        >
          {variants[sectionIndex]?.image}
        </motion.div>
      </div>

      <motion.div
        className={`absolute z-0 flex h-3/4 w-full p-4 opacity-20 md:hidden ${
          sectionIndex % 2 === 0 ? 'md:order-2' : 'md:order-1'
        } flex items-center justify-center`}
        key={sectionIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {variants[sectionIndex]?.image}
      </motion.div>
      <div className="relative bottom-6 z-20 mt-4 pt-8">
        <SectionAdvancer
          pages={variants.length}
          sectionIndex={sectionIndex}
          setSectionIndex={setSectionIndex}
        />
      </div>
    </div>
  )
}
