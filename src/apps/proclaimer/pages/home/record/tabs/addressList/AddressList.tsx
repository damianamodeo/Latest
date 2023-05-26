import Longpress from "@INPUTS/Longpress";
import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Center from "@CONTAINERS/Center";

type AddressType = {
  key: string;
};

type AddressListType = {
  notAtHomesList: AddressType[];
};

const AddressList = ({ notAtHomesList: addresses }: AddressListType) => {
  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const [address, setAddress] = useState({});
  const handleLongpress = (address: any) => {
    setAddress(address);
    setUpdateModelOpen(true);
  };
  return (
    <div className={`pb-16`}>
      <div className="text-sm text-center m-2 text-blue-500 dark:text-blue-300"></div>
      {addresses &&
        addresses
          .sort((a, b) => {
            return b.key.localeCompare(a.key);
          })
          .filter((address: any) => {
            return (
              address.user ===
              `${localStorage.getItem("initID")}_${localStorage.getItem(
                "username"
              )}`
            );
          })
          .map((address: any, key: number) => {
            return (
              <div key={key}>
                <div
                  className={`flex rounded m-2 p-2 dark:bg-neutral-700 bg-neutral-200 text-xs`}
                >
                  <div className="dark:text-white">
                    <div className="font-bold">
                      Map: {address.mapNumber} - {address.suburb} - {address.letter ?  <span className="text-blue-500 dark:text-blue-400">Letter List</span> :  <span className="text-green-500 dark:text-green-400">Return List</span>}
                    </div>
                    <div className="text-lg">
                      {`${address.unitNumber && `${address.unitNumber}/`}${
                        address.houseNumber
                      } ${address.street}`}
                    </div>
                    
                  </div>
                  <div className="grow"></div>
                  <Longpress
                    style="w-10 grid place-items-center"
                    action={() => handleLongpress(address)}
                  >
                    <div>
                      <div className="bg-red-500 font-bold h-4 w-4 text-xs rounded-full text-center">
                        X
                      </div>
                    </div>
                  </Longpress>
                </div>
              </div>
            );
          })}

      {updateModelOpen && (
        <ConfirmDeleteModal
          isOpen={updateModelOpen}
          address={address}
          setUpdateModelOpen={setUpdateModelOpen}
        ></ConfirmDeleteModal>
      )}
    </div>
  );
};

export default AddressList;
