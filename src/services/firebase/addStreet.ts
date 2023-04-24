import { doc, runTransaction } from "firebase/firestore";
import { fdb } from "./config";

type NewStreetType = {
  cong: string;
  mapID: number;
  suburb: number;
  street: string;
};

const addStreet = async ({ cong, mapID, suburb, street }: NewStreetType) => {
  const documentRef = doc(fdb, cong, "maps");
  try {
    const newMapDetails: object = await runTransaction(
      fdb,
      async (transaction) => {
        const document = await transaction.get(documentRef);
        // check if exists
        if (!document.exists()) {
          return {};
        }
        // get mapDetails
        const mapDetails = await transaction.get(documentRef).then((a) => {
          return a.data()?.mapDetails;
        });
        // add streets and sort
        if (!mapDetails[mapID].suburbs[suburb].streets.includes(street)) {
          mapDetails[mapID].suburbs[suburb].streets = [
            ...mapDetails[mapID].suburbs[suburb].streets,
            street,
          ].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        }
        // update doc
        transaction.update(documentRef, {
          mapDetails: mapDetails,
        });
        console.log(
          "<<< NEW STREET ADDED >>>\n",
          street,
          "\nLatest mapDetails:",
          mapDetails
        );
        return mapDetails;
      }
    );
    return newMapDetails;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default addStreet;
