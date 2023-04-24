import Button from "@INPUTS/Button";

type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className={`h-full pt-16 grid place-items-center gap-6`}>
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
        Add Maps
      </Button>
    </div>
  );
};

export default Home;
