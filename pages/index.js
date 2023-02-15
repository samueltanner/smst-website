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
      <div className={theme}>
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

        <div className="h-full w-full bg-primary py-4">
          <div className=" bottom-0 border-b-[2px] border-secondary sm:mr-[290px] " />
        </div>
        <Section>
          <div className="h-1/2 rounded-2xl bg-white font-secondary text-black">
            hi
          </div>
        </Section>
      </div>
    </ThemeProvider>
  )
}
