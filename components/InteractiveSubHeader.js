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
      setHeaderArray(['SAM', 'TANNER', 'developer', 'designer', 'entrepreneur'])
    }
    if (theme === 'mark') {
      setHeadShotImage('mark')
      setHeaderArray(['MARK', '(MY DOG)', "bark", "bark", "bark"])
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

      <div className="relative flex h-full w-[100%] items-end justify-end sm:w-[65%] md:w-[80%]">
        <div
          className=" absolute h-full w-full md:relative"
          ref={constraintsRef}
        >
          <div
            className={`absolute left-0 flex h-full max-w-full flex-col justify-center gap-2 pl-6 pb-5 ${
              headShotCollapsed ? 'z-40' : 'z-0'
            }`}
          >
            <span className="flex w-full flex-col">
              {headerArray.map((word, index) => {
                return (
                  <Fragment key={`${JSON.stringify(dimensions)}-${index}`}>
                    <span
                      className={`flex font-primary  ${
                        index < 2
                          ? 'font-primary text-6xl font-extrabold'
                          : 'mt-2 text-5xl font-light'
                      }`}
                    >
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
                    {index === 1 && (
                      <motion.div
                        className=" w-[240px] border-b-[10px] border-primary pt-0.5"
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
                  </Fragment>
                )
              })}
            </span>
          </div>
        </div>
        <HeadShot
          headShotImage={headShotImage}
          setHeadShotImage={setHeadShotImage}
          setHeaderArray={setHeaderArray}
          headShotCollapsed={headShotCollapsed}
          setHeadShotCollapsed={setHeadShotCollapsed}
        />
      </div>
    </div>
  )
}
