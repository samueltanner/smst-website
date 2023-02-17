import { Header } from '../components/Header'
import { InteractiveSubHeader } from '../components/InteractiveSubHeader'
import { ThemeProvider } from '../components/theme/themeContext'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '../components/Icon'
import { ThemeSelector } from '../components/theme/ThemeSelector'
import { getThemeFromLS, setThemeToLS } from '../lib/storage'
import { AboutMeSection } from '../components/AboutMeSection'
import { SectionAdvancer } from '../components/SectionAdvancer'
export default function Home() {
  const [theme, setTheme] = useState('default')
  const [headerVisible, setHeaderVisible] = useState(true)
  const headerRef = useRef(null)
  const aboutMeRef = useRef(null)

  useEffect(() => {
    if (!theme) {
      setTheme('default')
    }
    setThemeToLS(theme)
  }, [theme])

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

  if (!theme) return <></>
  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={`${theme} h-screen pb-20`}>
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
        {/* <div>
          <AboutMeSection />
        </div> */}
        {/* <div className="relative flex flex-col text-black"></div>
        <div className="h-full w-full bg-primary pt-4">
          <div className=" bottom-0 border-b-[4px] border-secondary sm:mr-[290px] " />
        </div> */}
      </div>
    </ThemeProvider>
  )
}
