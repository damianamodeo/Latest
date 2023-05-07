import TabbedPage from "@CONTAINERS/TabbedPage";
import { fdb } from "@SERVICES/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import List from "./tabs/list/List";

type ReturnType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Return = ({ changeSubpage }: ReturnType) => {
  const [notAtHomesList, setNotAtHomesList] = useState([{ key: "" }]);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fdb, "notAtHomes", "MaitlandCongregation"),
      (doc) => {
        const obj: any = doc.data();
        const list = obj
          ? Object.keys(obj).map((key) => {
              return { key, ...obj[key] };
            })
          : [];
        setNotAtHomesList(list);
      }
    );
    return unsub;
  }, []);
  return (
    <div className={`h-full`}>
      <TabbedPage
        color={"blue"}
        tabItems={[
          {
            title: "List",
            content: <List notAtHomesList={notAtHomesList}></List>,
          },
          {
            title: "Map",
            content: <div>Map</div>,
          },
        ]}
      ></TabbedPage>
    </div>
  );
};

export default Return;
