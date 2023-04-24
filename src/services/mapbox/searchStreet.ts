const searchStreet = async (
  streetQuery: string,
  bbox?: number[],
  suburb?: string,
  country?: string
) => {
  const box = bbox?.toString();
  const searchString = `https://api.mapbox.com/geocoding/v5/mapbox.places/${streetQuery}.json?country=au&bbox=${bbox?.join(
    "%2C"
  )}&proximity=151.209889%2C-33.874666&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;

  return await fetch(searchString)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.features;
    });
};

export default searchStreet;
