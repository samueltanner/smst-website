import { Icon } from './Icon'
import { ThemeSelector } from './theme/ThemeSelector'
import { useContext, useEffect, useRef, useState } from 'react'
import ThemeContext from './theme/themeContext'
import { useRouter } from 'next/router'

export const Header = ({ children, sticky = false }) => {
  const [headerVisible, setHeaderVisible] = useState(true)
  const router = useRouter()
  const headerRef = useRef(null)
  const { theme } = useContext(ThemeContext)

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

  const underline = (path) =>
    `border-b-[2px] mt-1 pb-0.5 pl-2 ${
      path === router.pathname
        ? 'border-secondary'
        : 'border-transparent hover:border-secondary hover:border-opacity-30 '
    } transition ease-in-out duration-300`

  return (
    <div
      className={`${
        sticky ? 'sticky top-0' : 'relative'
      } z-50 select-none bg-primary`}
      ref={headerRef}
    >
      <div className="z-50 flex h-20 items-center justify-between px-6">
        <Icon
          className={'h-8 w-8 fill-current text-white antialiased'}
          icon={theme}
        />
        <div className="ml-10 flex w-full justify-start gap-8 text-base text-sm text-offWhite">
          <button
            onClick={() => {
              router.push('/')
            }}
            className={`${underline('/')}`}
          >
            Home
          </button>
          <button
            onClick={() => {
              router.push('/resume')
            }}
            className={`${underline('/resume')}`}
          >
            Resume
          </button>
          <button
            onClick={() => {
              router.push('/portfolio')
            }}
            className={`${underline('/portfolio')}`}
          >
            Portfolio
          </button>
        </div>
        <ThemeSelector headerVisible={headerVisible} />
        {children}
      </div>
      {/* <div className="top-0 border-b-[4px] border-secondary sm:mr-[290px] " />
      <span className="absolute top-20 right-[78px] z-30 hidden h-[440px] w-[215px] rounded-br-full rounded-tr-full border-t-[4px] border-b-[4px] border-r-[4px] border-secondary sm:block" /> */}
    </div>
  )
}
