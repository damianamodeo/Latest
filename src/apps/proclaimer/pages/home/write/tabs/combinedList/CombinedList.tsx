import Accordian from "@CONTAINERS/Disclosure";
import LongPress from "@INPUTS/Longpress";
import { useState } from "react";
import SelectAddressModal from "./SelectAddressModal";
// import UpdateAddressModal from "../../components/UpdateAddressModal";

type CombinedListType = {
  mapNumbers?: any;
};

const CombinedList = ({ mapNumbers: suburbs }: CombinedListType) => {
  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const [address, setAddress] = useState({});

  return (
    <div className={``}>
      <div className=" mx-12 text-center dark:text-white">
        Press and hold and address to save it to your Personal List
      </div>
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
                  <div className="p-3 w-full bg-neutral-200 dark:bg-neutral-700 text-2xl">
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
                                <LongPress
                                  action={() => {
                                    setAddress(address);
                                    setUpdateModelOpen(true);
                                  }}
                                >
                                  <div
                                    className={`m-1 py-2 rounded text-center dark:text-white dark:bg-neutral-700 bg-neutral-300`}
                                  >
                                    {address.unitNumber &&
                                      `${address.unitNumber}/`}
                                    {address.houseNumber}
                                  </div>
                                </LongPress>
                              </div>
                            ))}
                        </div>
                      </Accordian>
                    </div>
                  ))}
              </Accordian>

              {updateModelOpen && (
                <SelectAddressModal
                  isOpen={updateModelOpen}
                  address={address}
                  setUpdateModelOpen={setUpdateModelOpen}
                ></SelectAddressModal>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default CombinedList;
