import { Header } from '../components/Header'
import { InteractiveSubHeader } from '../components/InteractiveSubHeader'
import { ThemeProvider } from '../components/theme/themeContext'
import { useState, useEffect } from 'react'
import { Icon } from '../components/Icon'
import { ThemeSelector } from '../components/theme/ThemeSelector'
import { getThemeFromLS, setThemeToLS } from '../lib/storage'
import { Section } from '../components/Section'
export default function Home() {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    if (!theme) {
      setTheme('default')
    }
    setThemeToLS(theme)
  }, [theme])

  if (!theme) return <></>
  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={`${theme} h-screen`}>
        <Header>
          <Icon
            className={'h-8 w-8 fill-current text-white antialiased'}
            icon={theme}
          />

          <ThemeSelector />
        </Header>
        <div className="pointer-events-auto h-[400px] ">
          <InteractiveSubHeader />
        </div>

        <div className=" h-20 w-full bg-primary">
          {/* <div className=" bottom-0 border-b-[2px] border-secondary sm:mr-[290px] " /> */}
        </div>
        {/* <Section>
          <p className="absolute pt-14 pl-10 font-primary text-5xl font-bold text-primary">
            ABOUT ME
          </p>
          <div className="flex h-[480px] bg-secondary p-20 font-secondary text-black">
            <div className="grid h-full w-full grid-cols-2 bg-offWhite">
              <div className="flex h-full items-center justify-center">hi</div>
              <div className="flex h-full items-center justify-center">
               Hey there, my name is Samuel Makali'i Seto Tanner
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="h-1/2 bg-offWhite font-secondary text-black"></div>
        </Section>
        <Section>
          <div className="h-1/2 bg-offWhite font-secondary text-black"></div>
        </Section>
        <Section>
          <div className="h-1/2 bg-offWhite font-secondary text-black"></div>
        </Section>
        <Section>
          <div className="h-1/2 bg-offWhite font-secondary text-black"></div>
        </Section>
        <Section>
          <div className="h-1/2 bg-offWhite font-secondary text-black"></div>
        </Section> */}
      </div>
    </ThemeProvider>
  )
}
