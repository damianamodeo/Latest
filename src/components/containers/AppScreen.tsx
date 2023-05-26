import { AnimatePresence, motion as m } from "framer-motion";
import { Suspense, useRef, useState } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

const variants = {
  enter: (direction: "<") => {
    return {
      zIndex: 0,
      x: direction === "<" ? "100%" : "-100%",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: ">") => {
    return {
      zIndex: 0,
      x: direction === ">" ? "100%" : "-100%",
    };
  },
};

type AppType = {
  pages: {
    startPage: string;
    Icon: any;
    subpages: { [key: string]: { Content: any; Header: any } | undefined };
  }[];
};

const App = ({ pages }: AppType) => {
  const [page, setPage] = useState(pages[0].startPage);
  const [direction, setDirection] = useState("<");
  const subpage = pages.map(({ startPage }) => {
    const [subpage, setSubpage] = useState(startPage);
    const ref = useRef(null);
    return { currentPage: subpage, setSubpage: setSubpage, ref: ref };
  });
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <div className={` ${isDarkMode && "dark"} dark:text-white`}>
      <div className="">
        {pages.map(({ startPage, subpages }, index) => {
          const Content = subpages[subpage[index].currentPage]?.Content;
          const Header = subpages[subpage[index].currentPage]?.Header;

          return (
            <div
              key={index}
              className={`${startPage === page ? "grow" : "hidden"}`}
            >
              <div className="fixed w-full bg-neutral-300 dark:bg-neutral-800 h-16">
                <Suspense fallback={<div></div>}>
                  <Header
                    changeSubpage={(
                      newSubpage: string,
                      direction: "<" | ">"
                    ) => {
                      setDirection(direction);
                      subpage[index].setSubpage(newSubpage);
                    }}
                  />
                </Suspense>
              </div>
              <div className="fixed top-16 bottom-16 w-full bg-white dark:bg-black overflow-y-auto">
                <AnimatePresence
                  initial={false}
                  mode="popLayout"
                  custom={direction}
                >
                  <m.div
                    className="h-full overflow-hidden"
                    key={subpage[index].currentPage}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "tween", duration: 0.3 },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    <Suspense fallback={<div></div>}>
                      <Content
                        changeSubpage={(
                          newSubpage: string,
                          direction: "<" | ">"
                        ) => {
                          setDirection(direction);
                          subpage[index].setSubpage(newSubpage);
                        }}
                      />
                    </Suspense>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 w-full flex h-16 bg-neutral-300 dark:bg-neutral-800">
        {pages.map(({ startPage, Icon }, index) => {
          const pageStyle =
            startPage === page
              ? "stroke-blue-700 dark:stroke-blue-400 text-blue-700 dark:text-blue-400"
              : "stroke-black dark:stroke-white dark:text-white";
          return (
            <div
              key={index}
              onClick={() => setPage(startPage)}
              className="grow flex justify-center "
            >
              <div className="flex flex-col justify-center text-center">
                <div
                  className={`${pageStyle}  fill-none stroke-[2] text-[1.4rem] mx-auto mb-1`}
                >
                  <Icon />
                </div>
                <div className={`${pageStyle} text-xs`}>{startPage}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
