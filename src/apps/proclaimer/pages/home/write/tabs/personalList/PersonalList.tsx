import Accordian from "@CONTAINERS/Disclosure";
import { lettersListDB } from "@SERVICES/dexie/initLetterList";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import DeleteAddressModal from "./DeleteAddressModal";
import LongPress from "@INPUTS/Longpress";
import Card from "@CONTAINERS/Card";

type PersonalListType = {
  lettersList?: any;
};

const PersonalList = ({ lettersList: mapNumbers }: PersonalListType) => {
  const addresses = useLiveQuery(() => lettersListDB.addresses.toArray());
  const [deleteModelOpen, setDeleteModelOpen] = useState(false);
  const [address, setAddress] = useState({});

  const handleClick = (address: any) => {
    console.log(address);
    setAddress(address);
    setDeleteModelOpen(true);
  };

  return (
    <div className={`dark:text-white text-black text-center bg-neutral-100 dark:bg-black  h-full`}>
      {addresses?.length === 0 ? (
        <div className="p-5">
          Your letter writing list is empty. Please add addresses from the
          SHARED LIST
        </div>
      ) : (
        <div className={`p-5`}>
          
          Press and hold to remove an address
          {addresses?.map((address: any, index: number) => {
            return (
              <div key={index} className="flex flex-col gap- ">
                <Card>
                  <LongPress action={() => handleClick(address)}>
                    <div className="text-xl">
                      {` ${address.unitNumber && `${address.unitNumber}/`}${
                        address.houseNumber
                      }
                    ${address.street},
                    ${address.suburb}`}
                    </div>
                  </LongPress>
                </Card>
              </div>
            );
          })}
          {deleteModelOpen && (
            <DeleteAddressModal
              isOpen={deleteModelOpen}
              address={address}
              setDeleteModelOpen={setDeleteModelOpen}
            ></DeleteAddressModal>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalList;
