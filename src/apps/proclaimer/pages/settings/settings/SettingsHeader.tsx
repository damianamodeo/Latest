import Header from "../../../../../components/containers/Header";

type SettingsHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const SettingsHeader = ({ changeSubpage }: SettingsHeaderType) => {
  return (
    <Header
      left={null}
      center={<div className={``}>Settings</div>}
      right={null}
    />
  );
};

export default SettingsHeader;
