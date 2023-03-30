type ReturnType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Return = ({ changeSubpage }: ReturnType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Write", ">")}>
      Return
    </div>
  );
};

export default Return;
