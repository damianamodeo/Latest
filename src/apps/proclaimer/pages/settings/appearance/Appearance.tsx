import ThemeSelect from "@COMPONENTS/utility/ThemeSelect";
import { useTernaryDarkMode } from "usehooks-ts";

type AppearanceType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Appearance = ({ changeSubpage }: AppearanceType) => {
  const {
    isDarkMode,
    ternaryDarkMode,
    setTernaryDarkMode,
    toggleTernaryDarkMode,
  } = useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;

  return (
    <div className={`grid place-items-center gap-2 p-2`}>
      <ThemeSelect></ThemeSelect>
    </div>
  );
};

export default Appearance;
