type WriteHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const WriteHeader = ({ changeSubpage }: WriteHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Home", "<")}>
      WriteHeader
    </div>
  );
};

export default WriteHeader;
