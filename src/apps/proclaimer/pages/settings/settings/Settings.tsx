import EditUserID from "@COMPONENTS/localStorage/EditUsername";
import Version from "@COMPONENTS/utility/Version";
import Center from "@CONTAINERS/Center";
import ChangeLog from "./changeLog/ChangeLog";
import AddMapID from "@COMPONENTS/firebase/AddMaps";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className="h-full overflow-y-auto">
      <Center>
        <Version></Version>
        <EditUserID></EditUserID>
        <ChangeLog></ChangeLog>
        <AddMapID></AddMapID>
      </Center>
    </div>
  );
};

export default Settings;
