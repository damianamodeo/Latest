import { doc, runTransaction } from "firebase/firestore";
import { fdb } from "./config";

type NotAtHomeType = {
  cong: string;
  mapID: string;
  suburb: string;
  street: string;
  houseNumber: string;
  unitNumber: string;
  calls: number[];
  letter: boolean;
  lng: number;
  lat: number;
  relevance: number;
  streetCoordinates: { lng: number; lat: number };
};

const addNotAtHome = async ({
  cong,
  mapID,
  lng,
  lat,
  relevance,
  streetCoordinates,
  ...addressData
}: NotAtHomeType) => {
  const newDetails = {
    ["id" + Date.now()]: {
      user: `${localStorage.getItem("initID")}_${localStorage.getItem(
        "username"
      )}`,
      id: Date.now(),
      mapNumber: mapID,
      relevance,
      ...addressData,
      ...(relevance > 0.7037 ? { lng, lat } : streetCoordinates),
    },
  };

  // const documentRef = doc(fdb, cong, "not_at_homes");
  // try {
  //   const newAddress = await runTransaction(fdb, async (transaction) => {
  //     const id = "id" + Date.now();
  //     const document = await transaction.get(documentRef);
  //     if (!document.exists()) {
  //       transaction.set(documentRef, {
  //         [id]: addressData,
  //       });
  //       return "First Not At Home created successfully";
  //     }
  //     transaction.update(documentRef, {
  //       [id]: addressData,
  //     });
  //     return addressData;
  //   });
  //   console.log("<<< NEW NOT AT HOME ADDED >>>\nAddress Details:", newAddress);
  //   return newAddress;
  // } catch (e: any) {
  //   console.error(e.message);
  //   return e;
  // }

  const documentRef = doc(fdb, "notAtHomes", "MaitlandCongregation");
  try {
    const newAddress = await runTransaction(fdb, async (transaction) => {
      const id = "id" + Date.now();
      const document = await transaction.get(documentRef);
      if (!document.exists()) {
        transaction.set(documentRef, newDetails);
        return "First Not At Home created successfully";
      }
      transaction.update(documentRef, newDetails);
      return newDetails;
    });
    console.log("<<< NEW NOT AT HOME ADDED >>>\nAddress Details:", newAddress);
    return newAddress;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default addNotAtHome;
