type HomeHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Record", ">")}>
      HomeHeader
    </div>
  );
};

export default HomeHeader;
