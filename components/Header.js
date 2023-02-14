export const Header = ({ children }) => {
  return (
    <div className="relative z-40 bg-primary pb-4">
      <div className="z-50 flex h-20 items-center justify-between px-6">
        {children}
      </div>
      <div className="top-0 border-b-[8px] border-secondary sm:mr-[310px] " />
      <span className="absolute top-20 right-[74px] z-[100] hidden h-[448px] w-[240px] rounded-br-full rounded-tr-full border-t-[8px] border-b-[8px] border-r-[8px] border-secondary sm:block" />
    </div>
  );
};
