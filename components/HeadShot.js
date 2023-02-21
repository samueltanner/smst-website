import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ShirtCutout } from './outlines/ShirtCutout'
import { FiChevronDown, FiRefreshCcw } from 'react-icons/fi'
import { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from './theme/themeContext'
import { HeadShotCutout } from './outlines/HeadShotCutout'
import { ImageWithOverlay } from './outlines/ImageWithOverlay'

export const HeadShot = ({
  headShotImage,
  setHeadShotImage,
  setHeaderArray,
  headShotCollapsed,
  setHeadShotCollapsed,
}) => {
  const [degree, setDegree] = useState(0)
  const [shirtOverlayHidden, setShirtOverlayHidden] = useState(false)
  const collapseButtonRef = useRef(null)

  const handleRotate = () => {
    setDegree(degree + 30)
  }

  useEffect(() => {
    setHeadShotCollapsed(false)
  }, [headShotImage, setHeadShotCollapsed])

  const { setTheme } = useContext(ThemeContext)

  return (
    <>
      <motion.div
        className="absolute bottom-0 h-full w-full"
        initial={{ y: 0 }}
        animate={{
          y: headShotCollapsed ? '60%' : 0,
          transition: {
            type: 'spring',
            damping: 30,
            stiffness: 100,
            delay: !headShotCollapsed ? 0.25 : 0,
          },
        }}
        exit={{ y: 0 }}
      >
        <ImageWithOverlay
          key={headShotImage}
          src={headShotImage === 'sam' ? '/img/headshot.png' : '/img/mark.png'}
          className={
            'absolute bottom-0 z-10 h-full w-full transform object-contain object-bottom'
          }
        >
          {headShotImage === 'sam' && (
            <>
              <HeadShotCutout
                className={
                  'absolute inset-auto bottom-0 z-0 max-h-full w-full max-w-full scale-[95%] fill-current text-primary opacity-90 lg:inset-0 lg:mx-auto'
                }
              />
              {!shirtOverlayHidden && (
                <ShirtCutout
                  onClick={() => {
                    setShirtOverlayHidden(true)
                  }}
                  className={
                    'absolute inset-auto bottom-0 z-50 max-h-full w-full max-w-full fill-current text-secondary lg:inset-0 lg:mx-auto'
                  }
                />
              )}
            </>
          )}
        </ImageWithOverlay>
      </motion.div>
      <span
        className={`absolute right-0 bottom-4 z-50 flex items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200 md:right-4 `}
        ref={collapseButtonRef}
      >
        <FiChevronDown
          className={`h-6 w-6 pt-0.5 ${
            headShotCollapsed && 'rotate-180'
          } cursor-pointer transition duration-300 ease-in-out`}
          onClick={() => {
            setHeadShotCollapsed(!headShotCollapsed)
          }}
        />
      </span>
      <AnimatePresence>
        <motion.div
          className={`absolute right-0 bottom-14 z-50 flex rounded-full border-2 border-zinc-900 bg-white p-1 text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200 md:right-4 md:ml-40`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: headShotCollapsed ? 1 : 0,
            transition: { delay: headShotCollapsed ? 0.25 : 0 },
          }}
          exit={{ opacity: 0, transition: { delay: 0 } }}
        >
          <FiRefreshCcw
            className={`h-4 w-4 stroke-[3px] ${
              headShotImage === 'mark' && 'rotate-180'
            } transition duration-300 ease-in-out`}
            onClick={() => {
              setShirtOverlayHidden(false)
              setHeadShotImage(headShotImage === 'sam' ? 'mark' : 'sam')
              setHeaderArray(
                headShotImage === 'sam' ? ['MARK'] : ['SAM', 'TANNER']
              )
              setTheme(headShotImage === 'sam' ? 'mark' : 'default')
            }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
