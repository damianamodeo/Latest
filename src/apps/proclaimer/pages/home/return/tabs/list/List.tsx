type ListType = {
  notAtHomesList?: any;
};

const List = ({ notAtHomesList }: ListType) => {
  return (
    <div className={``}>
      {notAtHomesList.map((item: any, index: number) => {
        return <div key={index}>{item.key}</div>;
      })}
    </div>
  );
};

export default List;
