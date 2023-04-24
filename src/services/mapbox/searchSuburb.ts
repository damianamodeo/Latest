const searchSuburb = async (
  suburbQuery: string,
  country?: string,
  bbox?: number[]
) => {
  // console.log("2",suburbQuery)
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
    `${suburbQuery}.json?` +
    `types=place&` +
    `proximity=151.209889,-33.874666&` +
    `access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.features;
    });
    
    // console.log("3",suburbQuery)
  return response;
};

export default searchSuburb;
