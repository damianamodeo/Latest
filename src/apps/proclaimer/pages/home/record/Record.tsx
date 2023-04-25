import TabbedPage from "@CONTAINERS/TabbedPage";
import AddAddress from "./tabs/addAddress/AddAddress";
import AddressList from "./tabs/addressList/AddressList";

const Record = () => {
  return (
    <div className={`h-full`}>
      <TabbedPage
      color={"blue"}
        tabItems={[
          { title: "Add", content: <AddAddress /> },
          { title: "List", content: <AddressList /> },
        ]}
      ></TabbedPage>
    </div>
  );
};

export default Record;
