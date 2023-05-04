import EditUserID from "@COMPONENTS/localStorage/EditUsername";
import Version from "@COMPONENTS/utility/Version";
import Center from "@CONTAINERS/Center";
import ChangeLog from "./changeLog/ChangeLog";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <>
      <Center>
        <Version></Version>
        <EditUserID></EditUserID>
        <ChangeLog></ChangeLog>
      </Center>
    </>
  );
};

export default Settings;
