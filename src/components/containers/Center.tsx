type CenterType = {
  children: any;
  style?: string;
  vertically?: boolean;
};

const Center = ({ children, style, vertically }: CenterType) => {
  return (
    <div
      className={`grid place-items-center ${style} ${vertically && "m-auto"} `}
    >
      {children}
    </div>
  );
};

export default Center;
