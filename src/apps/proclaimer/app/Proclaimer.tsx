import { lazy } from "react";
import App from "../../../components/containers/AppScreen";
import Home from "../pages/home/home/Home";
import HomeHeader from "../pages/home/home/HomeHeader";
import Settings from "../pages/settings/settings/Settings";
import SettingsHeader from "../pages/settings/settings/SettingsHeader";
import { ReactComponent as HomeIcon } from "../../../components/icons/home.svg";
import { ReactComponent as SettingsIcon } from "../../../components/icons/settings.svg";

const Record = lazy(() => import("../pages/home/record/Record"));
const RecordHeader = lazy(() => import("../pages/home/record/RecordHeader"));
const Return = lazy(() => import("../pages/home/return/Return"));
const ReturnHeader = lazy(() => import("../pages/home/return/ReturnHeader"));
const Write = lazy(() => import("../pages/home/write/Write"));
const WriteHeader = lazy(() => import("../pages/home/write/WriteHeader"));
const Appearance = lazy(
  () => import("../pages/settings/appearance/Appearance")
);
const AppearanceHeader = lazy(
  () => import("../pages/settings/appearance/AppearanceHeader")
);

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
