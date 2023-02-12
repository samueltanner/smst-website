import { motion } from "framer-motion";
import { useState, useRef } from "react";

export const MoveableLetter = ({ constraintsRef, letter }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      className={`text-6xl text-bold flex items-center justify-center drop-shadow-xl self-center flex-none font-soleil font-bold pb-1 rounded-sm text-gray-900`}
      drag
      dragConstraints={constraintsRef}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
      onClick={() => setIsDragging(!isDragging)}
    >
      {letter}
    </motion.div>
  );
};
