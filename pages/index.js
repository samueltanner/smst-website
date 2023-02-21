import { Header } from '../components/Header'
import { InteractiveSubHeader } from '../components/InteractiveSubHeader'
import { useRef } from 'react'
import { AboutMeSection } from '../components/AboutMeSection'
export default function Home() {
  const aboutMeRef = useRef(null)

  const executeScroll = (ref) => ref.current.scrollIntoView()

  return (
    <div className={`flex h-screen w-screen flex-col overflow-y-scroll`}>
      <Header />
      <div className="z-0 flex h-full w-full flex-none flex-col pb-20">
        <InteractiveSubHeader />
        <div className="flex h-20 items-center justify-center bg-primary pb-4 font-primary text-3xl text-offWhite">
          <button
            onClick={() => {
              executeScroll(aboutMeRef)
            }}
          >
            ...
          </button>
        </div>
      </div>

      <div ref={aboutMeRef} className="-mt-20">
        <AboutMeSection />
      </div>
    </div>
  )
}
