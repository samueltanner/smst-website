export const Header = ({ children }) => {
  return (
    <>
      <div className="z-50 flex h-20 items-center justify-between bg-primary px-6">
        {children}
      </div>
    </>
  );
};
