import { useRef } from "react";
import { useLongPress } from "./useLongPress";
import colors, { ColorsType } from "./styles/colors";
import widths, { WidthsType } from "./styles/widths";
import heights, { HeightsType } from "./styles/heights";

type ButtonType = {
  children: string;
  clickAction?: () => void;
  longPressAction?: () => void;
  color: ColorsType
  width: WidthsType
  height?: HeightsType
  delay?: number;
  submit?: boolean;
};

const Button = ({
  clickAction,
  longPressAction,
  children,
  color,
  width,
  delay,
  submit,
  height = "md"
}: ButtonType) => {
  const ref = useRef(document.createElement("button"));



  const onLongPress = () => {
    if (longPressAction) {
      longPressAction();
    }
    submit && ref.current.click();
  };

  const onClick = () => {
    if (clickAction) {
      clickAction();
    }
    submit && ref.current.click();
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: delay,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <>
      <button
        {...longPressEvent}
        type={`${submit ? "submit" : "button"}`}
        className={`${colors[color]} ${widths[width]} ${heights[height]} w- rounded text-white font-medium px-5 py-2.5 focus:outline-none dark:text-black`}
        ref={ref}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
