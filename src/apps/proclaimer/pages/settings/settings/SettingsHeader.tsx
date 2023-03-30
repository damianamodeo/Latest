type SettingsHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const SettingsHeader = ({ changeSubpage }: SettingsHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Appearance", ">")}>
      SettingsHeader
    </div>
  );
};

export default SettingsHeader;
