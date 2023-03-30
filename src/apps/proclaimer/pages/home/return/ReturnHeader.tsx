type ReturnHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const ReturnHeader = ({ changeSubpage }: ReturnHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Write", ">")}>
      ReturnHeader
    </div>
  );
};

export default ReturnHeader;
