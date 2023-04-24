import Version from "@COMPONENTS/utility/Version";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <>
      <Version></Version>
    </>
  );
};

export default Settings;
