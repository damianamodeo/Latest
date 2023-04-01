type HomeHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Record", ">")}>
      HomeHeader 0.9 feature/deploy
    </div>
  );
};

export default HomeHeader;
