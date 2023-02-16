import { Header } from '../components/Header'
import { InteractiveSubHeader } from '../components/InteractiveSubHeader'
import { ThemeProvider } from '../components/theme/themeContext'
import { useState, useEffect } from 'react'
import { Icon } from '../components/Icon'
import { ThemeSelector } from '../components/theme/ThemeSelector'
import { getThemeFromLS, setThemeToLS } from '../lib/storage'
import { CutoutShape } from '../components/CutoutShape'
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
      <div className={`${theme} h-screen pb-20`}>
        <Header>
          <Icon
            className={'h-8 w-8 fill-current text-white antialiased'}
            icon={theme}
          />
          <ThemeSelector />
        </Header>
        <div className="h-full">
          <div className="pointer-events-auto h-1/2">
            {/* <CutoutShape /> */}
            <InteractiveSubHeader />
          </div>
          <div className="h-1/4 bg-primary"></div>
        </div>

        {/* <div className="relative flex flex-col text-black"></div>
        <div className="h-full w-full bg-primary pt-4">
          <div className=" bottom-0 border-b-[4px] border-secondary sm:mr-[290px] " />
        </div> */}
      </div>
    </ThemeProvider>
  )
}
