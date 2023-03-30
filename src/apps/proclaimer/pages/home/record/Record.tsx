type RecordType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Record = ({ changeSubpage }: RecordType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Return", "<")}>
      Record
    </div>
  );
};

export default Record;
