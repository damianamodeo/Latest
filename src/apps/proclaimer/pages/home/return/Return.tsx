import TabbedPage from "@CONTAINERS/TabbedPage";
import { fdb } from "@SERVICES/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import SuburbsList from "./tabs/suburbsList/SuburbsList";
import MapsList from "./tabs/mapList/MapList";

type ReturnType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Return = ({ changeSubpage }: ReturnType) => {
  const [notAtHomesList, setNotAtHomesList] = useState([{ key: "" }]);
  const [mapNumbers, setMapNumbers] = useState<any[]>([]);
  const [suburbs, setSuburbs] = useState<any[]>([]);

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

        setMapNumbers(
          list.reduce((accumulator, currentValue) => {
            if (currentValue.letter) return accumulator;
            const mapNumberIndex = accumulator.findIndex(
              (item: any) => item.mapNumber === `${currentValue.mapNumber}`
            );
            if (mapNumberIndex < 0) {
              accumulator.push({
                mapNumber: currentValue.mapNumber,
                total: 1,
                streets: [
                  { street: currentValue.street, addresses: [currentValue] },
                ],
              });
            } else {
              accumulator[mapNumberIndex].total =
                accumulator[mapNumberIndex].total + 1;

              const streetIndex = accumulator[mapNumberIndex].streets.findIndex(
                (item: any) => item.street === `${currentValue.street}`
              );
              if (streetIndex < 0) {
                accumulator[mapNumberIndex].streets.push({
                  street: currentValue.street,
                  addresses: [currentValue],
                });
              } else {
                accumulator[mapNumberIndex].streets[streetIndex].addresses.push(
                  currentValue
                );
              }
            }

            return accumulator;
          }, [])
        );

        setSuburbs(
          list.reduce((accumulator, currentValue) => {
            if (currentValue.letter) return accumulator;
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
            title: "Suburb",
            content: <SuburbsList suburbs={suburbs}></SuburbsList>,
          },
          {
            title: "Map ID",
            content: <MapsList mapNumbers={mapNumbers}></MapsList>,
          },
        ]}
      ></TabbedPage>
    </div>
  );
};

export default Return;
