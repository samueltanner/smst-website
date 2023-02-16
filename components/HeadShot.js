import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ShirtCutout } from './Shirt'
import { FiChevronDown, FiRefreshCcw } from 'react-icons/fi'
import { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from './theme/themeContext'
import { HeadShotCutout } from './HeadshotCutout'

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
  }, [headShotImage])

  const { setTheme } = useContext(ThemeContext)

  return (
    <div className="group relative flex h-full flex-none items-end justify-center">
      <motion.div
        className={`f-full absolute z-40 ml-16 flex items-center justify-center self-center justify-self-center rounded-full border-2 border-zinc-900 bg-white p-1 text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200`}
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
      {!headShotCollapsed && (
        <HeadShotCutout
          className={'absolute bottom-0 z-[100] fill-current text-transparent'}
          onClick={() => {
            console.log(
              !shirtOverlayHidden ? "Hey! That's my shirt!" : 'Trippy'
            )
            setShirtOverlayHidden(true)
            handleRotate()
          }}
        />
      )}
      <motion.div
        className="group"
        initial={{ y: 0 }}
        animate={{
          y: headShotCollapsed ? '70%' : 0,
          transition: {
            type: 'spring',
            damping: 30,
            stiffness: 100,
            delay: !headShotCollapsed ? 0.25 : 0,
          },
        }}
        exit={{ y: 0 }}
      >
        {/* {headShotImage === 'sam' && (
          <span className="absolute top-14 right-16 mr-0.5 h-28 w-24 rounded-full bg-primary" />
        )} */}

        <span>
          <Image
            src={
              headShotImage === 'sam' ? '/img/headshot.png' : '/img/mark.png'
            }
            width={320}
            height={320}
            alt="Sam Tanner or Mark"
            style={{ filter: `hue-rotate(${degree}deg)` }}
            onClick={handleRotate}
            priority
            className="select-none"
          />
        </span>
        <AnimatePresence>
          <motion.span
            className={`absolute top-[63px] h-full w-full  ${
              !shirtOverlayHidden && headShotImage !== 'mark'
                ? 'text-secondary'
                : 'text-transparent'
            }`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ShirtCutout
              onClick={() => {
                setShirtOverlayHidden(true)
                handleRotate()
              }}
              className="group-hover:opacity-[95%]"
            />
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <span
        className={`absolute -left-10 bottom-4 z-50 flex items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200 sm:left-[330px]`}
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
    </div>
  )
}
