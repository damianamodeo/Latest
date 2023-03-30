type AppearanceHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const AppearanceHeader = ({ changeSubpage }: AppearanceHeaderType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Settings", "<")}>
      AppearanceHeader
    </div>
  );
};

export default AppearanceHeader;
