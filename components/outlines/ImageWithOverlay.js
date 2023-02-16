import Image from 'next/image'

export const ImageWithOverlay = ({ src, children }) => {
  return (
    <div className="relative flex h-[80%] w-full">
      <Image
        src={src}
        alt="Sam Tanner"
        fill
        className=" object-contain"
        priority
      />
      {children}
    </div>
  )
}
