import TabbedPage from "@CONTAINERS/TabbedPage";
import { fdb } from "@SERVICES/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import CombinedList from "./tabs/combinedList/CombinedList";
import PersonalList from "./tabs/personalList/PersonalList";

type WriteType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Write = ({ changeSubpage }: WriteType) => {
  const [mapNumbers, setMapNumbers] = useState<any[]>([]);
  const [lettersList, setLettersList] = useState<any[]>([]);

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

        setLettersList(
          list.reduce((accumulator, currentValue) => {
            if (!currentValue.letter) return accumulator;
            const suburbIndex = accumulator.findIndex(
              (item: any) => item.suburb === `${currentValue.suburb}`
            );
            if (suburbIndex < 0) {
              accumulator.push({
                suburb: currentValue.suburb,
                total: 1,
                streets: [
                  { street: currentValue.street, addresses: [currentValue] },
                ],
              });
            } else {
              accumulator[suburbIndex].total =
                accumulator[suburbIndex].total + 1;

              const streetIndex = accumulator[suburbIndex].streets.findIndex(
                (item: any) => item.street === `${currentValue.street}`
              );
              if (streetIndex < 0) {
                accumulator[suburbIndex].streets.push({
                  street: currentValue.street,
                  addresses: [currentValue],
                });
              } else {
                accumulator[suburbIndex].streets[streetIndex].addresses.push(
                  currentValue
                );
              }
            }

            return accumulator;
          }, [])
        );
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
            title: "Personal",
            content: <PersonalList lettersList={lettersList}></PersonalList>,
          },
          {
            title: "Shared",
            content: <CombinedList mapNumbers={lettersList}></CombinedList>,
          },
        ]}
      ></TabbedPage>
    </div>
  );
};

export default Write;
