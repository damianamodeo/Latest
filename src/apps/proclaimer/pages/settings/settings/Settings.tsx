import EditUserID from "@COMPONENTS/localStorage/EditUserID";
import Version from "@COMPONENTS/utility/Version";
import Center from "@CONTAINERS/Center";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <>
      <Center>
        <Version></Version>
        <EditUserID></EditUserID>
      </Center>
    </>
  );
};

export default Settings;
