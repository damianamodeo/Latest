import { useLongPress } from "./useLongPress";

const LongPress = ({ action, children }: any) => {
  const onLongPress = () => {
    action();
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  return <div {...longPressEvent}>{children}</div>;
};

export default LongPress;
