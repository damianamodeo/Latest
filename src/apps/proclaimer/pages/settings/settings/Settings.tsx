import EditUserID from "@COMPONENTS/localStorage/EditUsername";
import Version from "@COMPONENTS/utility/Version";
import Center from "@CONTAINERS/Center";
import ChangeLog from "./changeLog/ChangeLog";
import AddMapID from "@COMPONENTS/firebase/AddMaps";
import Card from "@CONTAINERS/Card";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className="bg-neutral-100 dark:bg-black h-full overflow-y-auto text-xl">
      <Version></Version>
      <Card onClick={() => changeSubpage("Appearance", "<")}>
        <Card.Title>Appearance</Card.Title>
      </Card>
      <Card onClick={() => changeSubpage("Details", "<")}>
        <Card.Title>Details</Card.Title>
      </Card>
      <Card onClick={() => changeSubpage("Examples", "<")}>
        <Card.Title>Component Examples</Card.Title>
      </Card>
    </div>
  );
};

export default Settings;
