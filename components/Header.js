export const Header = ({ children }) => {
  return (
    <div className=" sticky top-0 z-[100] bg-primary">
      <div className="z-50 flex h-20 items-center justify-between px-6">
        {children}
      </div>
      {/* <div className="top-0 border-b-[2px] border-secondary sm:mr-[290px] " /> */}
      {/* <span className="absolute top-20 right-[78px] z-30 hidden h-[436px] w-[215px] rounded-br-full rounded-tr-full border-t-[2px] border-b-[2px] border-r-[2px] border-secondary sm:block" /> */}
    </div>
  )
}
