import { motion, AnimatePresence } from 'framer-motion'
import { FiXCircle } from 'react-icons/fi'
export const Modal = ({ children, modalData, setModalData }) => {
  return (
    <motion.div
      className="absolute top-0 z-50 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-50 p-4"
      onClick={() => {
        setModalData(null)
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="relative z-[100] flex h-fit max-h-full w-full rounded-xl border-4 border-secondary bg-offWhite p-6 drop-shadow-lg md:h-fit md:max-h-[725px] md:w-3/4 md:max-w-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="group absolute right-0 top-0 h-fit w-fit p-2 text-primary">
          <FiXCircle
            className="h-6 w-6 group-hover:scale-105"
            onClick={() => {
              setModalData(null)
            }}
          />
        </span>
        {children}
      </div>
    </motion.div>
  )
}
