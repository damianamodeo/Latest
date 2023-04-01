import App from "../../../components/containers/AppScreen";
import Home from "../pages/home/home/Home";
import HomeHeader from "../pages/home/home/HomeHeader";
import Record from "../pages/home/record/Record";
import RecordHeader from "../pages/home/record/RecordHeader";
import Return from "../pages/home/return/Return";
import ReturnHeader from "../pages/home/return/ReturnHeader";
import Write from "../pages/home/write/Write";
import WriteHeader from "../pages/home/write/WriteHeader";
import Appearance from "../pages/settings/appearance/Appearance";
import AppearanceHeader from "../pages/settings/appearance/AppearanceHeader";
import Settings from "../pages/settings/settings/Settings";
import SettingsHeader from "../pages/settings/settings/SettingsHeader";
import { ReactComponent as HomeIcon } from "../../../components/icons/home.svg";
import { ReactComponent as SettingsIcon } from "../../../components/icons/settings.svg";

function Proclaimer() {
  const pages = [
    {
      startPage: "Home",
      Icon: HomeIcon,
      subpages: {
        Home: { Content: Home, Header: HomeHeader },

        Record: { Content: Record, Header: RecordHeader },
        Return: { Content: Return, Header: ReturnHeader },
        Write: { Content: Write, Header: WriteHeader },
      },
    },
    {
      startPage: "Settings",
      Icon: SettingsIcon,
      subpages: {
        Settings: { Content: Settings, Header: SettingsHeader },
        Appearance: { Content: Appearance, Header: AppearanceHeader },
      },
    },
  ];

  return <App pages={pages} />;
}

export default Proclaimer;
