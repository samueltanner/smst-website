import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export const MoveableLetter = ({ constraintsRef, letter }) => {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <motion.div
      className={`flex flex-none items-center justify-center self-center rounded-sm pb-1 font-primary text-primary`}
      drag
      dragConstraints={constraintsRef}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
      dragElastic={0.5}
      whileTap={{ cursor: 'grabbing' }}
      onClick={() => setIsDragging(!isDragging)}
    >
      <p className="drop-shadow-">{letter}</p>
    </motion.div>
  )
}
