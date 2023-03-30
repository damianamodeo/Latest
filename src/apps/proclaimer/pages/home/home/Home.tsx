type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Record", ">")}>
      Home
    </div>
  );
};

export default Home;
