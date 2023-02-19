import { motion, AnimatePresence } from 'framer-motion'
import { useState, useContext } from 'react'
import ThemeContext from './themeContext'

export const ThemeSelector = ({ headerVisible }) => {
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
  const { theme: globalTheme, setTheme } = useContext(ThemeContext)

  const themeList = [
    {
      name: 'default',
      colors: {
        primary: 'bg-[#18181b]',
        accent: 'to-white',
      },
    },
    {
      name: 'woodsy',
      colors: {
        primary: 'bg-[#414833]',
        accent: 'to-[#C2CDAA]',
      },
    },
    {
      name: 'desert',
      colors: {
        primary: 'bg-[#778C8E]',
        accent: 'to-[#C2CDAA]',
      },
    },
  ]
  return (
    <AnimatePresence>
      <motion.div
        className="relative z-[100]"
        key={headerVisible}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <div
          className={`${
            headerVisible
              ? ' absolute -top-4 right-0 flex-row-reverse'
              : 'fixed bottom-6 right-6 rotate-180 flex-col'
          } flex self-center justify-self-center`}
        >
          <div
            className="relative z-40 flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-md bg-white ring-offset-primary drop-shadow-md hover:bg-zinc-200"
            onClick={() => {
              setThemeDropdownOpen(!themeDropdownOpen)
            }}
          >
            <span className="h-5 w-5 rotate-45 rounded-full bg-primary" />
          </div>
          <AnimatePresence>
            {themeDropdownOpen && (
              <div
                className={`flex w-full  items-center gap-3 self-center rounded-b-lg  ${
                  headerVisible ? 'flex-row pr-3 pt-0.5' : 'flex-col pt-3'
                }`}
              >
                {themeList.map(
                  (theme, index) =>
                    theme.name !== globalTheme && (
                      <motion.div
                        key={index}
                        className={`z-30 h-5 w-5 rotate-45 rounded-full ring-2 ring-white drop-shadow-md ${theme.colors.primary} ${theme.colors.accent}`}
                        onClick={() => {
                          setTheme(theme.name)
                          setThemeDropdownOpen(false)
                        }}
                        initial={{
                          opacity: 0,
                          y: headerVisible ? 0 : -10,
                          x: !headerVisible ? 0 : 10,
                          rotate: 45,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: {
                            delay: 0.1,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: !headerVisible && -20 * (index + 1),
                          x: headerVisible && (index === 1 ? 40 : 30),
                          transition: {
                            delay: 0.1,
                            type: 'anticipate',
                            damping: 1000,
                            stiffness: 800,
                          },
                        }}
                      />
                    )
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
