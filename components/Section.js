import { ImageWithOverlay } from './outlines/ImageWithOverlay'
import { MeOutline } from './outlines/MeOutline'

export const Section = ({ children, ref }) => {
  return (
    <div
      className="relative flex h-screen items-center justify-center bg-offWhite p-24"
      ref={ref}
    >
      <div className="relative grid h-1/2 w-full grid-cols-2 bg-primary bg-opacity-20 p-0">
        <p className="absolute -top-6 -right-6 font-primary text-4xl font-bold text-secondary">
          A BIT ABOUT ME
        </p>
        <p className="text-md -ml-8 flex items-center font-primary text-zinc-900">
          Hi there, I&apos;m Sam Tanner, and throughout my career, I&apos;ve
          donned many hats: salesman, entrepreneur (multiple times over),
          chocolatier, barista, digital designer, and web developer, to name a
          few.
          <br />
          <br />
          It took me 28 years to realize that my resume is not a scattered mess;
          it&apos;s a testament to my unrelenting drive to create. You see, I
          don&apos;t just like building things - I live for it. Taking ideas and
          turning them into beautiful realities is what gets me out of bed in
          the morning.
        </p>

        <div className="flex items-end justify-center">
          <ImageWithOverlay src="/img/threshold_me.png">
            <MeOutline
              className={
                'absolute h-full w-full fill-current object-contain text-secondary opacity-40'
              }
            />
          </ImageWithOverlay>
        </div>
      </div>
    </div>
  )
}
