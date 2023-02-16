import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ShirtCutout } from './ShirtCutout'
import { FiChevronDown, FiRefreshCcw } from 'react-icons/fi'
import { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from './theme/themeContext'
import { HeadShotCutout } from './HeadShotCutout'

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
    <div className="flex h-full w-full items-end pr-16">
      <div className="group relative flex h-[80%] w-full items-center justify-center">
        <motion.div
          className={`absolute z-40 ml-40 flex rounded-full border-2 border-zinc-900 bg-white p-1 text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200`}
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
        {/* {!headShotCollapsed && (
          <HeadShotCutout
            className={
              'absolute bottom-0 z-[100] fill-current text-transparent'
            }
            onClick={() => {
              console.log(
                !shirtOverlayHidden ? "Hey! That's my shirt!" : 'Trippy'
              )
              setShirtOverlayHidden(true)
              handleRotate()
            }}
          />
        )} */}
        <motion.div
          className="group absolute bottom-0 flex h-full max-h-full w-full items-end justify-end"
          initial={{ y: 0 }}
          animate={{
            y: headShotCollapsed
              ? headShotImage === 'sam'
                ? '70%'
                : '50%'
              : 0,
            transition: {
              type: 'spring',
              damping: 30,
              stiffness: 100,
              delay: !headShotCollapsed ? 0.25 : 0,
            },
          }}
          exit={{ y: 0 }}
        >
          {/* <Image
            src={
              headShotImage === 'sam' ? '/img/headshot.png' : '/img/mark.png'
            }
            fill
            alt="Sam Tanner or Mark"
            style={{ filter: `hue-rotate(${degree}deg)` }}
            onClick={handleRotate}
            priority
            className="select-none items-end justify-end self-end bg-yellow-400 object-contain object-bottom "
          /> */}

          <img
            src={
              headShotImage === 'sam' ? '/img/headshot.png' : '/img/mark.png'
            }
            className="z-20 h-fit max-h-full select-none"
            alt="sam or mark"
          />
          {headShotImage === 'sam' && (
            <HeadShotCutout
              className={
                'absolute z-0 -mb-[4px] h-fit max-h-full fill-current text-primary'
              }
            />
          )}
          <ShirtCutout
            className={`absolute z-40 h-fit max-h-full fill-current text-secondary ${
              !shirtOverlayHidden && headShotImage !== 'mark'
                ? 'text-secondary hover:text-opacity-90'
                : 'text-transparent'
            } transition duration-300 ease-in-out`}
            onClick={() => {
              setShirtOverlayHidden(true)
            }}
          />

          {/* <AnimatePresence>
            <motion.span
              className={`absolute z-40 fill-current text-secondary ${
                !shirtOverlayHidden && headShotImage !== 'mark'
                  ? 'text-secondary'
                  : 'text-transparent'
              }`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ShirtCutout
                className={'absolute z-40 fill-current text-secondary'}
              />
            </motion.span>
          </AnimatePresence> */}
        </motion.div>
        <span
          className={`absolute -right-10 bottom-4 z-50 flex items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200 `}
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
    </div>
  )
}
