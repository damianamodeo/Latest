import { doc, runTransaction } from "firebase/firestore";
import { fdb } from "./config";

type NewMapType = { mapID: string; cong: string };

const addMap = async ({ mapID, cong }: NewMapType) => {
  if (mapID.length < 1) return;
  const documentRef = doc(fdb, cong, "maps");
  try {
    const newMapDetails = await runTransaction(fdb, async (transaction) => {
      const document = await transaction.get(documentRef);
      // check if exists else create
      if (!document.exists()) {
        transaction.set(documentRef, {
          mapDetails: [{ id: mapID, suburbs: [] }],
        });
        return {};
      }
      // get mapDetails
      const mapDetails = await transaction.get(documentRef).then((a) => {
        return a.data()?.mapDetails;
      });
      // add map then sort array
      const newDetails = [...mapDetails, { suburbs: [], id: mapID }].sort(
        (a, b) => a.id.toLowerCase().localeCompare(b.id.toLowerCase())
      );
      // update doc
      transaction.update(documentRef, {
        mapDetails: newDetails,
      });
      return newDetails;
    });
    console.log(
      "<<< NEW MAP ADDED >>>\n",
      mapID,
      "\nLatest mapDetails:",
      newMapDetails
    );
    return newMapDetails;
  } catch (e: any) {
    console.error("<<< NEW MAP NOT ADDED >>>", e.message);
    return e;
  }
};

export default addMap;
