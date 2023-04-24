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
  user: string;
  lng: number;
  lat: number;
  relevance: number;
};

const addNotAtHome = async ({
  cong,
  user,
  mapID,
  ...addressData
}: NotAtHomeType) => {
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
        transaction.set(documentRef, {
          [id]: {
            id: Date.now(),
            mapNumber: mapID,
            lng: addressData.lng,
            lat: addressData.lat,
          },
        });
        return "First Not At Home created successfully";
      }
      transaction.update(documentRef, {
        [id]: {
          id: Date.now(),
          mapNumber: mapID,
          user,
          lng: addressData.lng,
          lat: addressData.lat,
          relevance: addressData.relevance,
        },
      });
      return addressData;
    });
    console.log("<<< NEW NOT AT HOME ADDED >>>\nAddress Details:", newAddress);
    return newAddress;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default addNotAtHome;
