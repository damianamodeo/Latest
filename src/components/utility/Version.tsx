const Version = () => {
  const buildTime = import.meta.env.VITE_APP_BUILD_TIME
    ? import.meta.env.VITE_APP_BUILD_TIME * 1000
    : Date.now();
  const formattedBuildTime = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(buildTime);
  const formattedRelativeBuildTime = new Intl.RelativeTimeFormat("en-AU", {
    style: "short",
    numeric: "auto",
  }).format(
    Math.round(Date.now() - buildTime / 1000 / 60 / 60 / 24) * -1,
    "days"
  );

  return (
    <>
      <div className="m-6">
        Version: {formattedBuildTime} ({formattedRelativeBuildTime})
      </div>
    </>
  );
};

export default Version;
