import { useRef, useState, Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveableLetter } from "./MoveableLetter";
import { CutoutShape } from "./CutoutShape";
import { HeadShot } from "./HeadShot";

export const InteractiveSubHeader = ({}) => {
  const [headShotImage, setHeadShotImage] = useState("sam");
  const [headerArray, setHeaderArray] = useState(["SAM", "TANNER"]);
  const constraintsRef = useRef(null);
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  });

  return (
    <motion.div className="relative h-full w-full overflow-y-hidden">
      <CutoutShape />
      <div
        className="relative flex h-full w-[65%] items-end justify-end md:w-[80%]"
        ref={constraintsRef}
      >
        <div className="justify-top absolute left-0 flex h-full max-w-full flex-col gap-2  pt-4 pl-4">
          <span className="flex w-full flex-col">
            {headerArray.map((word, index) => {
              return (
                <span
                  className="flex"
                  key={`${JSON.stringify(dimensions)}-${index}`}
                >
                  {word.split("").map((letter, letterIndex) => {
                    return (
                      <Fragment key={`${headShotImage}-${letterIndex}`}>
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
