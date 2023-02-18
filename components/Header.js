import { Icon } from './Icon'
import { ThemeSelector } from './theme/ThemeSelector'
import { useContext } from 'react'
import ThemeContext from './theme/themeContext'
import { useRouter } from 'next/router'

export const Header = ({ children, headerVisible, sticky = false }) => {
  const router = useRouter()
  const { theme } = useContext(ThemeContext)

  console.log(router.pathname)
  const underline = (path) =>
    `border-b-[4px] ${
      path === router.pathname ? 'border-secondary' : 'border-transparent'
    }`

  return (
    <div className={`${sticky ? 'sticky top-0' : 'relative'} bg-primary`}>
      <div className="z-50 flex h-20 items-center justify-between px-6">
        <Icon
          className={'h-8 w-8 fill-current text-white antialiased'}
          icon={theme}
        />
        <div className="ml-10 flex w-full justify-start gap-8 font-bold text-offWhite">
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
