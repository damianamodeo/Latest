import Longpress from "@INPUTS/Longpress";
import deleteNotAtHome from "@SERVICES/firebase/deleteNotAtHome";

type AddressType = {
  key: string;
};

type AddressListType = {
  notAtHomesList: AddressType[];
};

const AddressList = ({ notAtHomesList: addresses }: AddressListType) => {
  console.log(addresses);
  return (
    <div className={`pb-16`}>
      <div className="text-sm text-center m-2 text-blue-500 dark:text-blue-300">
        Press and hold to delete
      </div>
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
                <Longpress action={() => deleteNotAtHome(address)}>
                  <div
                    className={`grid grid-cols-12 h-12 border-b dark:border-darkGrey-700 text-sm text-center ${
                      address.letter
                        ? "text-neutral-500 dark:text-neutral-400"
                        : "X"
                    }`}
                  >
                    <div className="col-span-2 px-2 my-auto font-bold">
                      {address.mapNumber}
                    </div>
                    <div className="col-span-1 px-2 my-auto">
                      {`${address.unitNumber && `${address.unitNumber}/`}${
                        address.houseNumber
                      }`}
                    </div>
                    <div className="col-span-4 my-auto">{`${address.street}`}</div>
                    <div className="col-span-4 my-auto">{address.suburb}</div>
                  </div>
                </Longpress>
              </div>
            );
          })}
    </div>
  );
};

export default AddressList;
