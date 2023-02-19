import { Header } from '../components/Header'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolio_data } from '../lib/data'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useContext, useEffect } from 'react'
import { Modal } from '../components/Modal'
import ReactPlayer from 'react-player'
import { BiCodeAlt } from 'react-icons/bi'
import { jsonToParagraphs } from '../lib/helpers'
import ThemeContext from '../components/theme/themeContext'

export default function Portfolio() {
  const [modalData, setModalData] = useState(false)

  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'mark') {
      setTheme('default')
    }
    // setTheme(theme === 'mark' && 'default')
  }, [theme, setTheme])

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
                {modalData.links.video && (
                  <div className=" flex w-full max-w-full items-center justify-center">
                    <ReactPlayer
                      url={modalData.links.video}
                      muted
                      playing
                      loop
                      onReady={() => console.log('onReady callback')}
                      controls={true}
                    />
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
