import { ReactNode, useEffect, useRef, useState } from "react";
import colors, { ColorsType } from "./styles/colors";

type TabbedPageType = {
  color: string;
  tabItems: {
    title: string;
    content: ReactNode;
  }[];
};

const TabbedPage = ({ tabItems, color = "blue" }: TabbedPageType) => {
  const handleClick = (e: any, key: number) => {
    contentRefs[key].current?.scrollIntoView();
  };

  const markerRef = useRef(document.createElement("div"));

  const contentRefs = tabItems.map(() => {
    return useRef(document.createElement("div"));
  });

  const tabRefs = tabItems.map(() => {
    return useRef(document.createElement("div"));
  });

  const [active, setActive] = useState(
    tabItems.map(() => {
      return false;
    })
  );

  useEffect(() => {
    tabRefs.forEach((ref: any, key: number) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActive(
              active.map((item: any, index: number) => {
                if (index === key) {
                  return true;
                }
                return false;
              })
            );
            tabRefs[key].current?.scrollIntoView();
            if (null != tabRefs[key].current) {
              markerRef.current.style.left =
                tabRefs[key].current.offsetLeft - 5 + "px";
              markerRef.current.style.width =
                tabRefs[key].current.offsetWidth + 10 + "px";
            }
          }
        },
        { threshold: 0.8 }
      );
      observer.observe(contentRefs[key].current);
    });
  }, []);

  useEffect(() => {
    const changeScroll = (e: any) => {
      e.preventDefault();
      tabbar.scrollLeft += e.deltaY / 5;
    };

    const tabbar: any = document.querySelector(".tabbar");
    tabbar.addEventListener("wheel", changeScroll);

    return () => {
      tabbar?.removeEventListener("wheel", changeScroll);
    };
  });

  return (
    <div className="h-full">
      <div
        className={`hideScollbar tabbar relative flex bg-white dark:bg-neutral-900 w-full touch-auto h-min-xx
				overflow-x-auto overflow-y-hidden border border-x-0 border-t-0 border-b-[1.25px] border-y-neutral-500 dark:border-y-neutral-500`}
      >
        {tabItems.map((item: any, key: number) => {
          return (
            <div
              key={key}
              ref={tabRefs[key]}
              onClick={(e) => handleClick(e, key)}
              className={`uppercase mx-3 ${
                active[key] ? `font-extrabold ${colors[color].text}` : ""
              }`}
            >
              <div className="my-2 w-max">{item.title}</div>
              <div className="-z-1 h-0 font-extrabold invisible w-max">
                {item.title}
              </div>
            </div>
          );
        })}
        <div
          className={`absolute left-0 bottom-0 h-[2px] ${colors[color].background} transition-all duration-300`}
          ref={markerRef}
        ></div>
      </div>

      <div className="overflow-y-auto overscroll-x-contain h-full">
        <div
          className={`hideScollbar h-full pb-2-xx grid grid-flow-col auto-cols-[100%] overflow-x-auto-xxx snap-x snap-mandatory snap-always overflow-y-auto `}
        >
          {tabItems.map((item: any, key: number) => {
            return (
              <div
                key={key}
                ref={contentRefs[key]}
                className={`snap-start overflow-y-auto h-full overflow-x-hidden`}
              >
                {item.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabbedPage;
