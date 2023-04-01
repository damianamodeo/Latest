type HeaderType = {
  children: any;
};

const Header = ({ children }: HeaderType) => {
  return <div className={`h-full p-2 grid place-items-center`}>{children}</div>;
};

export default Header;
