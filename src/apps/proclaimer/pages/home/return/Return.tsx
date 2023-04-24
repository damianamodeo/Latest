import AddMapID from "@COMPONENTS/firebase/AddMaps";
import Center from "@CONTAINERS/Center";

type ReturnType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Return = ({ changeSubpage }: ReturnType) => {
  return (
    <Center>
      <AddMapID></AddMapID>
    </Center>
  );
};

export default Return;
