import Image from 'next/image'

export const ImageWithOverlay = ({ src, children, className }) => {
  return (
    <div className="relative m-4 flex h-full w-full">
      <Image
        src={src}
        alt="Sam Tanner"
        fill
        className={className}
        priority
        sizes="(max-width: 768px) 100vw, 768px"
      />
      {children}
    </div>
  )
}
