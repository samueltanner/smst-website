import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ShirtCutout } from "./Shirt";

export const HeadShot = ({
  degree,
  handleRotate,
  shirtOverlayHidden,
  setShirtOverlayHidden,
}) => {
  return (
    <div className="relative flex-none z-20">
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
      {/* <span className="absolute top-10 right-16 h-28 w-24 rounded-full bg-zinc-900 " /> */}
    </div>
  );
};
