import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ShirtCutout } from "./Shirt";
import { FiChevronDown, FiRefreshCcw } from "react-icons/fi";
import { useState, useRef } from "react";

export const HeadShot = ({}) => {
  const [headShotCollapsed, setHeadShotCollapsed] = useState(false);
  const [degree, setDegree] = useState(0);
  const [shirtOverlayHidden, setShirtOverlayHidden] = useState(false);
  const [headShotImage, setHeadShotImage] = useState("sam");
  const collapseButtonRef = useRef(null);

  const handleRotate = () => {
    setDegree(degree + 30);
  };

  const pointerIsOverElement = (e) => {
    const { top, left, bottom, right } =
      collapseButtonRef.current.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    return x > left && x < right && y > top && y < bottom;
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
            setHeadShotImage(headShotImage === "sam" ? "mark" : "sam");
          }}
          on
        />
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: headShotCollapsed ? "70%" : 0 }}
        exit={{ y: 0 }}
      >
        <span className="absolute top-10 right-16 h-28 w-24 rounded-full bg-zinc-900 z-0" />

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
