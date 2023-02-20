import { Icon } from './Icon'
import { ThemeSelector } from './theme/ThemeSelector'
import { useContext, useEffect, useRef, useState } from 'react'
import ThemeContext from './theme/themeContext'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

export const Header = ({ sticky = false }) => {
  const [headerVisible, setHeaderVisible] = useState(true)
  const [copied, setCopied] = useState(false)
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

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  useEffect(() => {
    const widowSize = window.innerWidth
  })

  const addToClipboard = () => {
    navigator.clipboard.writeText('samuel.m.s.tanner@gmail.com')
  }

  const underline = (path) =>
    `border-b-[2px] mt-1 pb-0.5 pl-2 ${
      path === router.pathname
        ? 'border-secondary'
        : 'border-transparent hover:border-secondary hover:border-opacity-30 '
    } transition ease-in-out duration-300`

  return (
    <div
      className={`${
        sticky ? 'sticky top-0' : ''
      } select-none bg-primary drop-shadow-lg`}
      ref={headerRef}
    >
      <div className="flex h-20 items-center justify-between px-6">
        <Icon
          className={'h-8 w-8 fill-current text-white antialiased'}
          icon={theme}
        />
        <div className="mx-2 flex w-full justify-start gap-2 text-sm text-offWhite md:mx-6 md:gap-4">
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
          <button
            onClick={() => {
              addToClipboard()
              setCopied(true)
            }}
            className={`relative z-50`}
          >
            Contact
            <AnimatePresence>
              {copied && (
                <motion.span
                  className="absolute -bottom-20 left-0 z-20 rounded-md bg-secondary p-2 text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  <span className="absolute -top-2 left-7 z-10 flex h-4 w-4 rotate-45 rounded-sm bg-secondary" />
                  Email Copied To Clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <ThemeSelector headerVisible={headerVisible} />
      </div>
      {/* <div className="top-0 border-b-[4px] border-secondary sm:mr-[290px] " />
      <span className="absolute top-20 right-[78px] z-30 hidden h-[440px] w-[215px] rounded-br-full rounded-tr-full border-t-[4px] border-b-[4px] border-r-[4px] border-secondary sm:block" /> */}
    </div>
  )
}
