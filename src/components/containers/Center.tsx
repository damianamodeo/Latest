type CenterType = {
  children: any;
  style?: string;
};

const Center = ({ children, style }: CenterType) => {
  return <div className={`grid place-items-center ${style}`}>{children}</div>;
};

export default Center;
