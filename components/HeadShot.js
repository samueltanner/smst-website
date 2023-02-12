import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ShirtCutout } from "./Shirt";
import { FiChevronDown, FiRefreshCcw } from "react-icons/fi";
import { useState, useRef } from "react";

export const HeadShot = ({
  headShotImage,
  setHeadShotImage,
  setHeaderArray,
}) => {
  const [headShotCollapsed, setHeadShotCollapsed] = useState(false);
  const [degree, setDegree] = useState(0);
  const [shirtOverlayHidden, setShirtOverlayHidden] = useState(false);
  const collapseButtonRef = useRef(null);

  const handleRotate = () => {
    setDegree(degree + 30);
  };

  return (
    <div className="flex relative flex-none z-20 h-full justify-center items-end ">
      <div
        className={`ml-16 absolute self-center justify-self-center text-slate-900 border-2 border-zinc-900 rounded-full flex items-center justify-center bg-white hover:drop-shadow-md hover:bg-zinc-200 p-1 f-full ${
          headShotImage === "mark" && "rotate-180"
        } transition ease-in-out duration-300`}
      >
        <FiRefreshCcw
          className="h-4 w-4 stroke-[3px]"
          onClick={() => {
            setShirtOverlayHidden(false);
            setHeadShotImage(headShotImage === "sam" ? "mark" : "sam");
            setHeaderArray(
              headShotImage === "sam" ? ["MARK"] : ["SAM", "TANNER"]
            );
          }}
          on
        />
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: headShotCollapsed ? "70%" : 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 100,
          },
        }}
        exit={{ y: 0 }}
      >
        {headShotImage === "sam" && (
          <span className="absolute top-14 right-16 h-28 w-24 rounded-full bg-zinc-900 z-0 mr-1" />
        )}

        <Image
          src={headShotImage === "sam" ? "/img/headshot.png" : "/img/mark.png"}
          width={320}
          height={320}
          alt="Sam Tanner or Mark"
          style={{ filter: `hue-rotate(${degree}deg)` }}
          onClick={handleRotate}
          priority
        />

        <AnimatePresence>
          {!shirtOverlayHidden && headShotImage === "sam" && (
            <motion.span
              className="absolute top-[63px] h-full w-full text-zinc-900 hover:text-zinc-800"
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
      </motion.div>

      <span
        className={`absolute -right-8 bottom-4 text-slate-900 border-2 border-zinc-900 rounded-full flex items-center justify-center bg-white hover:drop-shadow-md hover:bg-zinc-200 ${
          headShotCollapsed && "rotate-180"
        } transition ease-in-out duration-300`}
        ref={collapseButtonRef}
      >
        <FiChevronDown
          className="h-6 w-6 pt-0.5"
          onClick={() => {
            setHeadShotCollapsed(!headShotCollapsed);
          }}
          on
        />
      </span>
    </div>
  );
};
