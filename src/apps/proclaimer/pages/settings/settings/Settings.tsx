import EditUserID from "@COMPONENTS/localStorage/EditUsername";
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
        <div className="m-6">
          <div>+ use street coordinates when address match is poor</div>
          <div>April 26</div>
          <div>+ add lazy loading</div>
          <div># fix Select component bottom margin</div>
        </div>
      </Center>
    </>
  );
};

export default Settings;
