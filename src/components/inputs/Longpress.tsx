import { useLongPress } from "./useLongPress";

const LongPress = ({ action, children, style }: any) => {
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
  return <div className={style} {...longPressEvent}>{children}</div>;
};

export default LongPress;
