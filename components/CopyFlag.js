import { AnimatePresence, motion } from 'framer-motion'
export const CopyFlag = ({ copied }) => {
  return (
    <AnimatePresence>
      {copied && (
        <motion.span
          className="absolute -bottom-20 -left-2 rounded-md bg-secondary p-2 text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
        >
          <span className="absolute -top-2 left-7 flex h-4 w-4 rotate-45 rounded-sm bg-secondary" />
          Email Copied To Clipboard!
        </motion.span>
      )}
    </AnimatePresence>
  )
}
