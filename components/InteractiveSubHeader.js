import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveableLetter } from "./MoveableLetter";
import { CutoutShape } from "./CutoutShape";
import { ShirtCutout } from "./Shirt";
import { HeadShot } from "./HeadShot";

export const InteractiveSubHeader = ({}) => {
  const [degree, setDegree] = useState(0);
  const [shirtOverlayHidden, setShirtOverlayHidden] = useState(false);
  const constraintsRef = useRef(null);

  const handleRotate = () => {
    setDegree(degree + 30);
  };

  return (
    <motion.div className="relative h-full w-full">
      <CutoutShape />
      <div
        className="relative flex justify-end items-end h-full w-4/5"
        ref={constraintsRef}
      >
        <div className="absolute left-0 flex flex-col h-full gap-2 justify-top pt-4 pl-4  max-w-full z-50">
          <span className="flex flex-none w-full">
            <MoveableLetter constraintsRef={constraintsRef} letter="S" />
            <MoveableLetter constraintsRef={constraintsRef} letter="A" />
            <MoveableLetter constraintsRef={constraintsRef} letter="M" />
          </span>
          <span className="flex flex-none">
            <MoveableLetter constraintsRef={constraintsRef} letter="T" />
            <MoveableLetter constraintsRef={constraintsRef} letter="A" />
            <MoveableLetter constraintsRef={constraintsRef} letter="N" />
            <MoveableLetter constraintsRef={constraintsRef} letter="N" />
            <MoveableLetter constraintsRef={constraintsRef} letter="E" />
            <MoveableLetter constraintsRef={constraintsRef} letter="R" />
          </span>
        </div>
        <HeadShot
          setShirtOverlayHidden={setShirtOverlayHidden}
          shirtOverlayHidden={shirtOverlayHidden}
          handleRotate={handleRotate}
          degree={degree}
        />
      </div>
    </motion.div>
  );
};
