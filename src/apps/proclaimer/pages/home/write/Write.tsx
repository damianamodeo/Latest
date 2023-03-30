type WriteType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Write = ({ changeSubpage }: WriteType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Home", "<")}>
      Write
    </div>
  );
};

export default Write;
