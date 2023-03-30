type AppearanceType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Appearance = ({ changeSubpage }: AppearanceType) => {
  return (
    <div className={``} onClick={() => changeSubpage("Settings", "<")}>
      Appearance
    </div>
  );
};

export default Appearance;
