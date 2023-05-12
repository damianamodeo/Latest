import Accordian from "@CONTAINERS/Disclosure";
import { useState } from "react";
import UpdateAddressModal from "../../components/UpdateAddressModal";

type SuburbsListType = {
  suburbs?: any;
};

const SuburbsList = ({ suburbs }: SuburbsListType) => {
  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const [address, setAddress] = useState({});

  return (
    <div className={``}>
      {suburbs
        .filter((address: any) => {
          return address.suburb !== undefined;
        })
        .sort((a: any, b: any) => b.total - a.total)
        .map((item: any, index: number) => {
          return (
            <div key={index} className="mx-auto w-full max-w-md p-2">
              <Accordian
                title={
                  <div className="p-3 w-full bg-neutral-200 dark:bg-neutral-700  border-black border-[.6px]">
                    {`${item.suburb} (${item.total})`}{" "}
                  </div>
                }
              >
                {item.streets
                  .sort((a: any, b: any) => a.street.localeCompare(b.street))
                  .map((street: any, index: any) => (
                    <div key={index} className="my-2 mx-6">
                      <Accordian
                        title={
                          <div className="p-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded">
                            {`${street.street} ${street.addresses.length}`}
                          </div>
                        }
                        key={index}
                      >
                        <div
                          className={` grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]`}
                        >
                          {street.addresses
                            .sort(
                              (
                                a: { houseNumber: number },
                                b: { houseNumber: number }
                              ) => {
                                return a.houseNumber - b.houseNumber;
                              }
                            )
                            .map((address: any, index: any) => (
                              <div key={index}>
                                <div
                                  onClick={() => {
                                    setAddress(address);
                                    setUpdateModelOpen(true);
                                  }}
                                  className={`m-1 py-2 rounded text-center ${
                                    address.houseNumber % 2 === 0
                                      ? "dark:bg-blue-800 bg-blue-300"
                                      : "dark:bg-green-800 bg-green-300"
                                  }`}
                                >
                                  {address.unitNumber &&
                                    `${address.unitNumber}/`}
                                  {address.houseNumber}
                                </div>
                              </div>
                            ))}
                        </div>
                      </Accordian>
                    </div>
                  ))}
              </Accordian>

              {updateModelOpen && (
                <UpdateAddressModal
                  isOpen={updateModelOpen}
                  address={address}
                  setUpdateModelOpen={setUpdateModelOpen}
                ></UpdateAddressModal>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SuburbsList;
