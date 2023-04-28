import TabbedPage from "@CONTAINERS/TabbedPage";
import AddAddress from "./tabs/addAddress/AddAddress";
import AddressList from "./tabs/addressList/AddressList";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { fdb } from "@SERVICES/firebase/config";

const Record = () => {
  const [mapDetails, setMapDetails] = useState<
    {
      id: string;
      suburbs: { name: string; bbox: number[]; streets: [] }[];
    }[]
  >([]);

  const [notAtHomesList, setNotAtHomesList] = useState(() => {
    return;
  });

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fdb, "notAtHomes", "MaitlandCongregation"),
      (doc) => {
        setNotAtHomesList(() => doc.data());
      }
    );
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fdb, "australia_nsw_maitland", "maps"),
      (doc) => {
        if (doc.data()) {
          setMapDetails(doc.data()?.mapDetails);
        }
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className={`h-full`}>
      <TabbedPage
        color={"blue"}
        tabItems={[
          { title: "Add", content: <AddAddress mapDetails={mapDetails} /> },
          {
            title: "List",
            content: <AddressList notAtHomesList={notAtHomesList} />,
          },
        ]}
      ></TabbedPage>
    </div>
  );
};

export default Record;
