import { Icon } from './Icon'
import { ThemeSelector } from './theme/ThemeSelector'
import { useContext, useEffect, useRef, useState } from 'react'
import ThemeContext from './theme/themeContext'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { CopyFlag } from './CopyFlag'

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

  const addToClipboard = () => {
    navigator.clipboard.writeText('samuel.m.s.tanner@gmail.com')
  }

  const underline = (path) =>
    `border-b-[2px] mt-1 pb-0.5 ${
      path === router.pathname
        ? 'border-secondary'
        : 'border-transparent hover:border-secondary hover:border-opacity-30 '
    } transition ease-in-out duration-300`

  return (
    <div
      className={` z-40 select-none bg-primary font-primary drop-shadow-lg `}
      ref={headerRef}
    >
      <div className="flex h-20 items-center justify-between overflow-visible px-6">
        <Icon
          className={
            'hidden h-8 w-8 fill-current text-white antialiased sm:block'
          }
          icon={theme}
        />
        <div className="mx-2 flex w-full justify-start gap-3 text-sm text-offWhite sm:mx-6 md:gap-4">
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
            <CopyFlag copied={copied} />
          </button>
        </div>
        <ThemeSelector headerVisible={headerVisible} />
      </div>
      {/* <div className="top-0 border-b-[4px] border-secondary sm:mr-[290px] " />
      <span className="absolute top-20 right-[78px] z-30 hidden h-[440px] w-[215px] rounded-br-full rounded-tr-full border-t-[4px] border-b-[4px] border-r-[4px] border-secondary sm:block" /> */}
    </div>
  )
}
