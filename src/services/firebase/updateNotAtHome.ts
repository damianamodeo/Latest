import { fdb } from "@SERVICES/firebase/config";
import {
  deleteField,
  doc,
  runTransaction,
  updateDoc,
} from "firebase/firestore";

type AddressType = {
  id: number;
  user: string;
  mapNumber: string;
  suburb: string;
  street: string;
  houseNumber: string;
  unitNumber: string;
  letter: boolean;
};

const updateNotAtHome = async (address: any, key: any, value: any) => {
  const documentRef = doc(fdb, "notAtHomes", "MaitlandCongregation");
  try {
    const newAddress = await runTransaction(fdb, async (transaction) => {
      const addressDetails: any = await transaction
        .get(documentRef)
        .then((a) => {
          return a.data();
        });

      transaction.update(documentRef, {
        ...addressDetails,
        [address.key]: { ...addressDetails[address.key], [key]: value },
      });
    });
    return newAddress;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default updateNotAtHome;
