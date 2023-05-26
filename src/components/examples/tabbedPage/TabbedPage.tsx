import TabbedPage from "@CONTAINERS/TabbedPage";
import Page02 from "./tabs/page02/Page02";
import Page01 from "./tabs/page01/Page01";

const TabbedPageComponent = () => {
  return (
    <div className={`h-full`}>
      <TabbedPage
        color={"blue"}
        tabItems={[
          { title: "Page One", content: <Page01 /> },
          {
            title: "Page Two",
            content: <Page02 />,
          },
        ]}
      ></TabbedPage>
    </div>
  );
};

export default TabbedPageComponent;
