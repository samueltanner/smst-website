import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ShirtCutout } from "./Shirt";
import { FiChevronDown, FiRefreshCcw } from "react-icons/fi";
import { useState, useRef, useEffect, useContext } from "react";
import ThemeContext from "./theme/themeContext";

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
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="relative flex h-full flex-none items-end justify-center ">
      <div
        className={`f-full absolute z-10  ml-16 flex items-center justify-center self-center justify-self-center rounded-full border-2 border-zinc-900 bg-white p-1 text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200 ${
          headShotImage === "mark" && "rotate-180"
        } transition duration-300 ease-in-out`}
      >
        <FiRefreshCcw
          className="h-4 w-4 stroke-[3px]"
          onClick={() => {
            setShirtOverlayHidden(false);
            setHeadShotImage(headShotImage === "sam" ? "mark" : "sam");
            setHeaderArray(
              headShotImage === "sam" ? ["MARK"] : ["SAM", "TANNER"]
            );
            setTheme(headShotImage === "sam" ? "mark" : "default");
          }}
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
        className="z-20"
      >
        {headShotImage === "sam" && (
          <span className="absolute top-14 right-16 z-0 mr-1 h-28 w-24 rounded-full bg-zinc-900" />
        )}
        <Image
          src={headShotImage === "sam" ? "/img/headshot.png" : "/img/mark.png"}
          width={320}
          height={320}
          alt="Sam Tanner or Mark"
          style={{ filter: `hue-rotate(${degree}deg)` }}
          onClick={handleRotate}
          priority
          className=" select-none"
        />

        <AnimatePresence>
          {!shirtOverlayHidden && headShotImage === "sam" && (
            <motion.span
              className="absolute top-[63px] h-full w-full text-secondary"
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
        className={`absolute -right-8 bottom-4 z-30 flex items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-slate-900 ring-4 ring-white drop-shadow-md hover:bg-zinc-200 ${
          headShotCollapsed && "rotate-180"
        } cursor-pointer transition duration-300 ease-in-out`}
        ref={collapseButtonRef}
      >
        <FiChevronDown
          className="h-6 w-6 pt-0.5"
          onClick={() => {
            setHeadShotCollapsed(!headShotCollapsed);
          }}
        />
      </span>
    </div>
  );
};
