import { useRef, useState, Fragment } from "react";
import { motion } from "framer-motion";
import { MoveableLetter } from "./MoveableLetter";
import { CutoutShape } from "./CutoutShape";
import { HeadShot } from "./HeadShot";

export const InteractiveSubHeader = ({}) => {
  const [headShotImage, setHeadShotImage] = useState("sam");
  const [headerArray, setHeaderArray] = useState(["SAM", "TANNER"]);

  const constraintsRef = useRef(null);

  return (
    <motion.div className="relative h-full w-full overflow-y-hidden">
      <CutoutShape />
      <div
        className="relative flex justify-end items-end h-full w-4/5 "
        ref={constraintsRef}
      >
        <div className="absolute left-0 flex flex-col h-full gap-2 justify-top pt-4 pl-4  max-w-full z-50">
          <span className="flex flex-col w-full">
            {headerArray.map((word, index) => {
              return (
                <span className="flex" key={index}>
                  {word.split("").map((letter, letterIndex) => {
                    return (
                      <Fragment key={letterIndex}>
                        <MoveableLetter
                          constraintsRef={constraintsRef}
                          letter={letter}
                        />
                      </Fragment>
                    );
                  })}
                </span>
              );
            })}
          </span>
        </div>
        <HeadShot
          headShotImage={headShotImage}
          setHeadShotImage={setHeadShotImage}
          setHeaderArray={setHeaderArray}
        />
      </div>
    </motion.div>
  );
};
