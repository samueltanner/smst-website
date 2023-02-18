import { Header } from '../components/Header'
import { InteractiveSubHeader } from '../components/InteractiveSubHeader'
import { ThemeProvider } from '../components/theme/themeContext'
import { useState, useEffect, useRef, useContext } from 'react'
import { Icon } from '../components/Icon'
import { ThemeSelector } from '../components/theme/ThemeSelector'
import { getThemeFromLS, setThemeToLS } from '../lib/storage'
import { AboutMeSection } from '../components/AboutMeSection'
import { SectionAdvancer } from '../components/SectionAdvancer'
import ThemeContext from '../components/theme/themeContext'
export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true)
  const headerRef = useRef(null)
  const aboutMeRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { top, bottom } = headerRef.current.getBoundingClientRect()
        const isVisible = bottom > 0
        setHeaderVisible(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const executeScroll = (ref) => ref.current.scrollIntoView()

  const { theme } = useContext(ThemeContext)

  return (
    // <ThemeProvider value={{ theme, setTheme }}>
    <div className={`h-screen pb-20`}>
      <div ref={headerRef}>
        <Header>
          <Icon
            className={'h-8 w-8 fill-current text-white antialiased'}
            icon={theme}
          />
          <ThemeSelector headerVisible={headerVisible} />
        </Header>
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
