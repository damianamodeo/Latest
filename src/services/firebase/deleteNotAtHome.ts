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

const deleteAddress = async (address: any) => {
  const documentRef = doc(fdb, "notAtHomes", "MaitlandCongregation");
  try {
    const newAddress = await runTransaction(fdb, async (transaction) => {
      transaction.update(documentRef, { [address.key]: deleteField() });
    });
    console.log("<<< NOT AT HOME DELETED >>>\nAddress Details:", address);
    return newAddress;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default deleteAddress;
