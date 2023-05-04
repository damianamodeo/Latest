type QueryType = {
  houseNumber: string;
  street: number | string;
  suburb: number | string;
  bbox: number[];
  country?: string;
};

const getAddressCoordinates = async ({
  houseNumber,
  street,
  suburb,
  bbox,
  country,
}: QueryType) => {
  const tolerance = 0.015;
  const searchString = `https://api.mapbox.com/geocoding/v5/mapbox.places/${houseNumber}%20${street}%20${suburb}%20.json?country=au&bbox=${
    bbox[0] - tolerance
  }%2C${bbox[1] - tolerance}%2C${bbox[2] + tolerance}%2C${
    bbox[3] + tolerance
  }&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;

  return await fetch(searchString)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {
        lng: data.features[0].center[0],
        lat: data.features[0].center[1],
        relevance: data.features[0].relevance,
      };
    });
};

export default getAddressCoordinates;
