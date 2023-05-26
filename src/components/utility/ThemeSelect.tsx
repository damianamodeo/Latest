import Form from "@INPUTS/Form";
import { useTernaryDarkMode } from "usehooks-ts";

export default function ThemeSelect() {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;

  return (
    <div className={`dark:text-white flex`}>
      <div className={`text-xl my-auto pr-2`}>Theme:</div>
      <Form.Select
        options={["light", "dark", "system"]}
        onChange={(ev) => setTernaryDarkMode(ev as TernaryDarkMode)}
        value={ternaryDarkMode}
        width={"sm"}
        placeholder="theme"
      ></Form.Select>
    </div>
  );
}
