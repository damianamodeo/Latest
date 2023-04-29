type AddressType = {
  key: string
}

type AddressListType = {
  notAtHomesList: AddressType[];
};

const AddressList = ({ notAtHomesList: addresses }: AddressListType) => {
  return (
    <div className={`pb-16`}>
      {addresses &&
        Object.entries(addresses)
          .sort((a, b) => {
            return b[1].key.localeCompare(a[1].key);
          })
          .filter((address: any) => {
            return (
              address[1].user ===
              `${localStorage.getItem("initID")}_${localStorage.getItem(
                "username"
              )}`
            );
          })
          .map((address: any, key: number) => {
            return (
              <div
                key={key}
                // onClick={() => handleClick(address)}
                className="grid grid-cols-12 h-12 border-b dark:border-darkGrey-700 text-sm text-center"
              >
                <div className="col-span-2 px-2 my-auto font-bold">
                  {address[1].mapNumber}
                </div>
                <div className="col-span-1 px-2 my-auto">
                  {`${address[1].unitNumber && `${address[1].unitNumber}/`}${
                    address[1].houseNumber
                  }`}
                </div>
                <div className="col-span-4 my-auto">
                  {`${address[1].street}`}
                </div>
                <div className="col-span-4 my-auto">{address[1].suburb}</div>
                <div className="col-span-1 px-2 text-right my-auto">
                  {/* <LongPress action={() => handleLongPress(address)}>
                    {`${address[1].letter ? "L X" : "X"}`}
                  </LongPress> */}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default AddressList;
