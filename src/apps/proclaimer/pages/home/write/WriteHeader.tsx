import Header from "@CONTAINERS/Header";
import { ReactComponent as BackArrow } from "@ICONS/backArrow.svg";

type WriteHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const WriteHeader = ({ changeSubpage }: WriteHeaderType) => {
  return (
    <Header
      left={
        <div
          className="flex stroke-blue-700 fill-none dark:stroke-blue-400 text-blue-700 dark:text-blue-400 stroke-[2] "
          onClick={() => changeSubpage("Home", ">")}
        >
          <div className="text-[2rem] m-auto">
            <BackArrow />
          </div>
          <div className="my-auto">Back</div>
        </div>
      }
      center={<div className={``}>Write</div>}
      right={<div></div>}
    ></Header>
  );
};

export default WriteHeader;
