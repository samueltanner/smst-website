import Image from 'next/image'

export const ImageWithOverlay = ({ src, children, className }) => {
  return (
    <div className="relative flex h-[80%] w-full">
      <Image src={src} alt="Sam Tanner" fill priority className={className} />
      {children}
    </div>
  )
}
