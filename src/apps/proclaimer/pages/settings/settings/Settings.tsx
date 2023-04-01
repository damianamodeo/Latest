type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  const buildTime = import.meta.env.VITE_APP_BUILD_TIME
    ? import.meta.env.VITE_APP_BUILD_TIME * 1000
    : Date.now();
  const formattedDateAndTime = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(buildTime);
  return <div className="p-4">Build Time: {formattedDateAndTime}</div>;
};

export default Settings;
