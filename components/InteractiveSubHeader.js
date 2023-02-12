import Image from "next/image";
import { useState } from "react";

export const InteractiveSubHeader = ({}) => {
  const [degree, setDegree] = useState(0);

  const handleRotate = () => {
    setDegree(degree + 30);
  };

  return (
    <div className="relative h-full w-full">
      <div
        className="relative flex justify-center items-end h-full drop-shadow-xl"
        onClick={() => handleRotate()}
      >
        <span
          className="bg-teal-900 h-24 w-28 absolute top-24 rounded-full ml-4"
          style={{ filter: `hue-rotate(${degree}deg)` }}
        />
        <Image
          src="/img/headshot.png"
          width={350}
          height={300}
          alt="Sam Tanner"
          style={{ filter: `hue-rotate(${degree}deg)` }}
        />
      </div>
    </div>
  );
};
