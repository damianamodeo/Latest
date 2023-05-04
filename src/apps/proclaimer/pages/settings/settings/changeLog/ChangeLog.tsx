const ChangeLog = () => {
  const changes = [
    {
      date: "May 3",
      changes: [
        "+ add ability to submit to letter list",
        "+ restrict special characters in house or unit number fields",
        "+ use street coordinates when address match is poor",
        "# fix use of letters in house or unit number fields",
      ],
    },
    {
      date: "April 26",
      changes: [
        "+ add lazy loading (performance)",
        "# fix Select component bottom margin",
      ],
    },
  ];
  return (
    <div className="m-6">
      {changes.map((change, index) => (
        <>
          <div key={index} className="mt-8 font-bold">
            {change.date}
          </div>
          {change.changes.map((change, index) => (
            <div key={index} className="mt-1">{change}</div>
          ))}
        </>
      ))}
    </div>
  );
};

export default ChangeLog;
