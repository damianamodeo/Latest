import Header from "../../../../../components/containers/Header";

type HomeHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderType) => {
  return (
    <Header
      left={null}
      center={<div className={``}>Home</div>}
      right={null}
    />
  );
};

export default HomeHeader;
