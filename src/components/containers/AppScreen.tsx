import { AnimatePresence, motion as m } from "framer-motion";
import { useRef, useState } from "react";

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
    Icon: () => JSX.Element;
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

  return (
    <div className={`dark:text-white`}>
      <div className="">
        {pages.map(({ startPage, subpages }, index) => {
          const Content = subpages[subpage[index].currentPage]?.Content;
          const Header = subpages[subpage[index].currentPage]?.Header;

          return (
            <div
              key={index}
              className={`${startPage === page ? "grow" : "hidden"}`}
            >
              <div className="fixed w-full bg-gray-300 dark:bg-gray-800 h-16">
                <Header
                  changeSubpage={(newSubpage: string, direction: "<" | ">") => {
                    setDirection(direction);
                    subpage[index].setSubpage(newSubpage);
                  }}
                />
              </div>
              <div className="fixed top-16 bottom-16 w-full bg-white dark:bg-black">
                <AnimatePresence
                  initial={false}
                  mode="popLayout"
                  custom={direction}
                >
                  <m.div
                    className=""
                    key={subpage[index].currentPage}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "tween", duration: 0.4 },
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <Content
                      changeSubpage={(
                        newSubpage: string,
                        direction: "<" | ">"
                      ) => {
                        setDirection(direction);
                        subpage[index].setSubpage(newSubpage);
                      }}
                    />
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 w-full flex h-16 bg-gray-300 dark:bg-gray-800">
        {pages.map(({ startPage, Icon }, index) => {
          return (
            <div
              key={index}
              onClick={() => setPage(startPage)}
              className="grow flex justify-center "
            >
              <div className="flex flex-col justify-center text-center">
                <Icon></Icon>
                <div>{startPage}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;