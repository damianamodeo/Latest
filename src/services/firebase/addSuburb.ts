import { doc, runTransaction } from "firebase/firestore";
import { fdb } from "./config";

type NewSuburbType = {
  cong: string;
  mapID: number;
  suburb: string;
  bbox: number[];
};

const addSuburb = async ({ cong, mapID, suburb, bbox }: NewSuburbType) => {
  const documentRef = doc(fdb, cong, "maps");
  try {
    const newMapDetails = await runTransaction(fdb, async (transaction) => {
      const document = await transaction.get(documentRef);
      // check if exists
      if (!document.exists()) {
        console.log("<<<NO SUCH DOCUMENT>>>");
        return {};
      }
      // get mapDetails
      const mapDetails = await transaction.get(documentRef).then((a) => {
        return a.data()?.mapDetails;
      });
      // add new suburb and sort


      mapDetails[mapID].suburbs = [
        ...mapDetails[mapID].suburbs,
        mapDetails[mapID].suburbs
          .map(({ name }: any) => {
            console.log(name);
            return name;
          })
          .includes(suburb)
          ? null
          : {
              streets: [],
              bbox: bbox,
              name: suburb,
            },
      ].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );

      // update doc
      transaction.update(documentRef, {
        mapDetails: mapDetails,
      });
      return mapDetails;
    });
    console.log(
      "<<< NEW SUBURB ADDED >>>\n",
      suburb,
      "\nLatest mapDetails:",
      newMapDetails
    );
    return newMapDetails;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default addSuburb;
