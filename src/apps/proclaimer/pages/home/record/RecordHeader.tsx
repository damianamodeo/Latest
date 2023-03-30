type RecordHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const RecordHeader = ({ changeSubpage }: RecordHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Return", "<")}>
      RecordHeader
    </div>
  );
};

export default RecordHeader;
