import Header from "../../../../../components/containers/Header";

type SettingsHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const SettingsHeader = ({ changeSubpage }: SettingsHeaderType) => {
  return (
    <Header>
      <div className={``}>
        Settings
      </div>
    </Header>
  );
};

export default SettingsHeader;
