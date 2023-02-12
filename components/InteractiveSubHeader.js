import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveableLetter } from "./MoveableLetter";
import { CutoutShape } from "./CutoutShape";
import { ShirtCutout } from "./Shirt";

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
        <div className="absolute left-0 flex flex-col h-full gap-2 justify-top pt-4 pl-4 w-screen max-w-full z-10">
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

        {/* <span className="absolute top-0 -right-28 h-[400px] w-[400px] rounded-full bg-yellow-500" /> */}
        <div className="relative flex-none z-20">
          <span className="absolute top-10 right-16 h-28 w-24 rounded-full bg-zinc-900 " />
          <Image
            src="/img/headshot.png"
            width={320}
            height={320}
            alt="Sam Tanner"
            style={{ filter: `hue-rotate(${degree}deg)` }}
            onClick={handleRotate}
            priority
          />
          <AnimatePresence>
            {!shirtOverlayHidden && (
              <motion.span
                className="absolute top-[63px] h-full w-full text-zinc-900 "
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ShirtCutout
                  onClick={() => {
                    setShirtOverlayHidden(true);
                    handleRotate();
                  }}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
