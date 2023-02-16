import { useRef, useState, Fragment, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { MoveableLetter } from './MoveableLetter'
import { CutoutShape } from './CutoutShape'
import { HeadShot } from './HeadShot'
import ThemeContext from './theme/themeContext'

export const InteractiveSubHeader = ({}) => {
  const [headShotImage, setHeadShotImage] = useState('sam')
  const [headerArray, setHeaderArray] = useState([])
  const constraintsRef = useRef(null)
  const [dimensions, setDimensions] = useState()
  const textRef = useRef(null)
  const [headShotCollapsed, setHeadShotCollapsed] = useState(false)

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme !== 'mark') {
      setHeadShotImage('sam')
      setHeaderArray(['SAM', 'TANNER', 'Designer', 'Developer', 'Builder'])
    }
    if (theme === 'mark') {
      setHeadShotImage('mark')
      setHeaderArray(['MARK', '(MY DOG)', "bark", "woof"])
    }
  }, [theme])

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  })

  return (
    <div className="relative h-full w-full overflow-y-hidden">
      {/* <CutoutShape /> */}

      <div className="relative flex h-full w-full flex-col justify-between  md:flex-row">
        <div
          className="z-50 h-1/2 w-full md:relative  md:h-full md:w-1/2"
          ref={constraintsRef}
        >
          <div
            className={`absolute left-0 flex h-full w-full flex-row justify-start gap-2  pl-6 pb-4 pt-4 md:justify-end  ${
              headShotCollapsed ? 'z-40' : 'z-0'
            }`}
          >
            <span className="flex w-full flex-col">
              {headerArray.map((word, index) => {
                return (
                  <span key={`${JSON.stringify(dimensions)}-${index}`}>
                    <span
                      className={`flex font-primary  ${
                        index < 2
                          ? 'font-primary text-7xl font-extrabold md:text-8xl'
                          : 'mt-4 text-6xl font-light'
                      }`}
                    >
                      <span className="flex">
                        {word.split('').map((letter, letterIndex) => {
                          return (
                            <Fragment key={`${headShotImage}-${letterIndex}`}>
                              <MoveableLetter
                                constraintsRef={constraintsRef}
                                letter={letter}
                              />
                            </Fragment>
                          )
                        })}
                      </span>
                    </span>
                    {index === 1 && (
                      <motion.div
                        className="w-[420px] border-b-[16px] border-secondary pt-2"
                        drag
                        dragConstraints={constraintsRef}
                        dragTransition={{
                          bounceStiffness: 600,
                          bounceDamping: 100,
                        }}
                        dragElastic={0.5}
                        whileTap={{ cursor: 'grabbing' }}
                      />
                    )}
                  </span>
                )
              })}
            </span>
          </div>
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <HeadShot
            headShotImage={headShotImage}
            setHeadShotImage={setHeadShotImage}
            setHeaderArray={setHeaderArray}
            headShotCollapsed={headShotCollapsed}
            setHeadShotCollapsed={setHeadShotCollapsed}
          />
        </div>
      </div>
    </div>
  )
}
