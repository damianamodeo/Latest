import Button from "@INPUTS/Button";

type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className={`h-1/4 grid place-items-center`}>
      <Button
        color="blue"
        width="md"
        clickAction={() => changeSubpage("Record", "<")}
      >
        Record
      </Button>
      <Button
        color="blue"
        width="md"
        clickAction={() => changeSubpage("Return", "<")}
      >
        Return
      </Button>
    </div>
  );
};

export default Home;
