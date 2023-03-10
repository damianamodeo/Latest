import { ReactNode } from "react";

type ScreenType = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenType) => {
  return (
    <div className="fixed h-[100dvh] w-[100dvw] flex flex-col bg-gray-200">
      {children}
    </div>
  );
};

export default Screen;
