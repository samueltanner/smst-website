import { Header } from '../components/Header'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolio_data } from '../lib/data'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useContext, useEffect } from 'react'
import { Modal } from '../components/Modal'
import ReactPlayer from 'react-player'
import { BiCodeAlt } from 'react-icons/bi'
import { FiArrowLeftCircle, FiArrowRightCircle, FiLoader } from 'react-icons/fi'
import { jsonToParagraphs } from '../lib/helpers'
import ThemeContext from '../components/theme/themeContext'
import Image from 'next/image'

export default function Portfolio() {
  const [modalData, setModalData] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [videoReady, setVideoReady] = useState(false)

  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'mark') {
      setTheme('default')
    }
  }, [theme, setTheme])

  useEffect(() => {
    setVideoReady(false)
  }, [modalData])

  return (
    <div className="flex h-screen w-screen flex-col overflow-y-scroll">
      <Header sticky={true} />
      <div className="flex w-full flex-wrap justify-center gap-8 py-8">
        {portfolio_data.map((project, index) => (
          <motion.div
            key={index}
            className={`h-[400px] w-[80%] min-w-[300px] md:w-[45%]`}
            onClick={() => {
              setModalData(project)
            }}
          >
            <PortfolioCard project={project} index={index} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {modalData && (
          <Modal setModalData={setModalData}>
            <div className="flex w-full flex-col gap-4 font-primary text-primary">
              <p className="flex items-center gap-4 text-4xl font-extrabold">
                {modalData.title}{' '}
                {modalData.links.repo && (
                  <BiCodeAlt
                    className="cursor-pointer opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    onClick={() => window.open(modalData.links.repo, '_blank')}
                  />
                )}
              </p>
              <div className="flex flex-wrap gap-x-3 text-secondary">
                {modalData.stack.map((item, index) => (
                  <div className="whitespace-nowrap" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <span className="flex flex-col gap-3 overflow-y-scroll">
                <div className=" flex w-full max-w-full items-center justify-center">
                  {modalData.links.video && (
                    <div>
                      <ReactPlayer
                        url={modalData.links.video}
                        height={videoReady ? '460px' : '0'}
                        width="580px"
                        muted
                        playing
                        loop
                        onReady={() => setVideoReady(true)}
                        controls={true}
                      />
                      {!videoReady && (
                        <div className="flex w-full flex-col items-center justify-center text-primary">
                          <FiLoader className="h-6 w-6 animate-spin" />
                          Loading Video...
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {modalData.images.length > 1 && !modalData.links.video && (
                  <div>
                    <div className="relative h-fit min-h-[300px] w-full">
                      <Image
                        src={modalData.images[imageIndex]}
                        alt={modalData.title}
                        className="object-contain"
                        fill
                      />
                    </div>
                    <span className="mt-2 flex w-full justify-center">
                      <button
                        onClick={() => {
                          if (imageIndex > 0) {
                            setImageIndex(imageIndex - 1)
                          }
                        }}
                        className="z-10 block"
                      >
                        <FiArrowLeftCircle className="mr-3 h-6 w-6 animate-spin hover:scale-105" />
                      </button>
                      <button
                        onClick={() => {
                          if (imageIndex < modalData.images.length - 1) {
                            setImageIndex(imageIndex + 1)
                          } else {
                            setImageIndex(0)
                          }
                        }}
                        className="z-10 block"
                      >
                        <FiArrowRightCircle className="ml-3 h-6 w-6 hover:scale-105" />
                      </button>
                    </span>
                  </div>
                )}
                <p>{jsonToParagraphs(modalData.description)}</p>
              </span>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
