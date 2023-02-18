import { Header } from '../components/Header'
import { InteractiveSubHeader } from '../components/InteractiveSubHeader'
import { useRef } from 'react'
import { AboutMeSection } from '../components/AboutMeSection'
export default function Home() {
  const aboutMeRef = useRef(null)

  const executeScroll = (ref) => ref.current.scrollIntoView()

  return (
    <div className={`h-screen pb-20`}>
      <div>
        <Header />
      </div>
      <div className="h-full">
        <div className="pointer-events-auto h-full pb-20">
          {/* <CutoutShape /> */}
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
      </div>
      <div ref={aboutMeRef}>
        <AboutMeSection />
      </div>
    </div>
  )
}
