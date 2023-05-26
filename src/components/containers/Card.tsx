type CardType = {
  children: any;
  onClick?: () => any;
};

const Card = ({ children, onClick }: CardType) => {
  return (
    <div
      onClick={onClick}
      className={`grid items-center m-1 bg-white dark:bg-neutral-800 h-24 rounded p-6 dark:text-white`}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: any) => {
  return <div className={`font-bold text-xl dark:text-white-`}>{children}</div>;
};

Card.Title = Title;

export default Card;
