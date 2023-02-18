import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../components/theme/themeContext'
import { useState, useEffect, useRef } from 'react'
import { getThemeFromLS, setThemeToLS } from '../lib/storage'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    if (!theme) {
      setTheme('default')
    }
    setThemeToLS(theme)
  }, [theme])

  if (!theme) return <></>

  return (
    <>
      <ThemeProvider value={{ theme, setTheme }}>
        <div className={`${theme}`}>
          <title>Sam Tanner</title>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
