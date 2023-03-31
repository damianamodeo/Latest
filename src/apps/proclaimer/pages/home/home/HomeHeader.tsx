type HomeHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Record", ">")}>
      HomeHeader 0.8
    </div>
  );
};

export default HomeHeader;
