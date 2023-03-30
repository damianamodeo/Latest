type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Appearance", ">")}>
      Settings
    </div>
  );
};

export default Settings;
