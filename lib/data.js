import { ImageWithOverlay } from '../components/outlines/ImageWithOverlay'
import { MeOutline } from '../components/outlines/MeOutline'
import { UpOutline } from '../components/outlines/UpOutline'
import { MarkNMe } from '../components/outlines/MarkNMe'

export const variants = [
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
    position: '-top-8 -right-8',
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
        className={'h-20 -rotate-6 transform object-contain p-10'}
      >
        <UpOutline
          className={
            'absolute h-full w-full -rotate-2 transform fill-current object-contain p-10 text-green-900 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-top-8 -left-8',
    button: {
      text: 'Check Out My Portfolio',
      link: '/portfolio',
    },
  },
  {
    title: 'What I Am All About',
    body: [
      'I am an active and social guy. I love to explore new places, and meet new people. I grew up backpacking through the Cascades and the Olympics with my dad and to this day, backpacking is one of my favorite things to do. To date, a few of my favorite places I have hiked are the South Island of New Zealand, the Albanian Alps, and the North Cascades.',
      'When I am not in the back country, I like to spend my time traveling with my fiance, Tess, and our dog, Mark. We are a food-obsessed trio and we always have a trip on the books so we can try new restaurants and cuisines.',
    ],
    image: (
      <ImageWithOverlay
        src="/img/marknme.png"
        className={'h-20 rotate-6 transform object-contain p-10'}
      >
        <MarkNMe
          className={
            'absolute h-full w-full rotate-2 transform fill-current object-contain p-10 text-yellow-600 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-bottom-4 -left-8',
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
        className={'h-20 rotate-6 transform object-contain p-10'}
      >
        <MarkNMe
          className={
            'absolute h-full w-full rotate-2 transform fill-current object-contain p-10 text-yellow-600 opacity-40'
          }
        />
      </ImageWithOverlay>
    ),
    position: '-bottom-4 -right-8',
    button: {
      text: 'Reach Out To Me!',
      link: '/contact',
    },
  },
]
