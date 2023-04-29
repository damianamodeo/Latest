import { useReducer } from "react";
import AddStreetModal from "./components/AddStreetModal";
import AddSuburbModal from "./components/AddSuburbModal";
import Form from "@INPUTS/Form";
import Button from "@INPUTS/Button";
import getAddressCoordinates from "@SERVICES/mapbox/getAddressCoordinates";
import addNotAtHome from "@SERVICES/firebase/addNotAtHome";

const reducer = (state: any, action: any) => {
  if (typeof action.payload === "object") {
    return { ...state, [action.type]: "adding " + action.type };
  }
  const actions: { [key: string]: any } = {
    mapID: {
      mapID: action.payload,
      suburb: "init",
      street: "init",
      houseNumber: "",
      unitNumber: "",
    },
    suburb: {
      ...state,
      suburb: action.payload,
      street: "init",
      houseNumber: "",
      unitNumber: "",
    },
    street: {
      ...state,
      street: action.payload,
      houseNumber: "",
      unitNumber: "",
    },
    houseNumber: {
      ...state,
      houseNumber: action.payload,
    },
    unitNumber: { ...state, unitNumber: action.payload },
  };
  return actions[action.type];
};

type AddAddressType = {
  mapDetails: {
    id: string;
    suburbs: {
      name: string;
      bbox: number[];
      streets: { name: string; lng: number; lat: number }[];
    }[];
  }[];
};

type ReducerType = [
  {
    mapID: string;
    suburb: string;
    street: string;
    houseNumber: string;
    unitNumber: string;
  },
  (action: {
    type: "mapID" | "suburb" | "street" | "houseNumber" | "unitNumber";
    payload: any;
  }) => any
];

const AddAddress = ({ mapDetails }: AddAddressType) => {
  const [state, dispatch]: ReducerType = useReducer(reducer, {
    mapID: "init",
    suburb: "init",
    street: "init",
    houseNumber: "",
    unitNumber: "",
  });

  const currentMapIndex = () => {
    return Math.max(
      0,
      mapDetails.findIndex((map: any) => map.id == state.mapID)
    );
  };

  const currentSuburbIndex: () => number = () => {
    if (state.mapID === "init") {
      return 0;
    }
    return Math.max(
      0,
      mapDetails[currentMapIndex()].suburbs.findIndex(
        (suburb) => suburb.name === state.suburb
      )
    );
  };

  const currentStreetIndex: () => number = () => {
    return mapDetails[currentMapIndex()].suburbs[
      currentSuburbIndex()
    ].streets.findIndex((street) => street.name === state.street);
  };

  const clickAdd = async () => {
    currentStreetIndex();

    const mapData = await getAddressCoordinates(
      state.houseNumber,
      state.street,
      state.suburb,
      mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()].bbox
    );
    addNotAtHome({
      ...mapData,
      ...state,
      letter: false,
      calls: [Date.now()],
      cong: "australia_nsw_maitland",
      streetCoordinates: {
        lng: mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()]
          .streets[currentStreetIndex()].lng,
        lat: mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()]
          .streets[currentStreetIndex()].lat,
      },
    });
    if (state.unitNumber === "") {
      dispatch({ type: "houseNumber", payload: "" });
    }
    dispatch({ type: "unitNumber", payload: "" });
  };

  const suburbOptions =
    mapDetails.length === 0
      ? []
      : mapDetails[currentMapIndex()].suburbs.map((suburb: any) => suburb.name);

  const streetOptions =
    mapDetails.length === 0
      ? []
      : mapDetails[currentMapIndex()].suburbs.length === 0
      ? []
      : mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()].streets.map(
          (street: any) => street.name
        );

  return (
    <>
      <div className="flex justify-center p-2">
        <Form>
          <Form.Select
            onChange={(val) => {
              dispatch({ type: "mapID", payload: val });
            }}
            options={mapDetails.map((map) => map.id)}
            placeholder="Map"
            value={state.mapID}
            width="lg"
            height="xl"
          ></Form.Select>
          <div className="h-2"></div>
          {state.mapID !== "init" && (
            <Form.Select
              onChange={(val) => {
                dispatch({ type: "suburb", payload: val });
              }}
              value={state.suburb}
              options={[
                ...suburbOptions,
                <span className="text-blue-400">add new suburb</span>,
              ]}
              placeholder="Suburb"
              width="lg"
              height="xl"
            />
          )}

          <div className="h-2"></div>
          {state.suburb === "init" ? null : (
            <Form.Select
              onChange={(val) => {
                dispatch({ type: "street", payload: val });
              }}
              value={state.street}
              options={[
                ...streetOptions,
                <span className="text-blue-400">add new street</span>,
              ]}
              placeholder="Street"
              width="lg"
              height="xl"
            />
          )}
          <div className="h-2"></div>
          <div className="flex">
            {state.street === "init" ? null : (
              <Form.Alphanumeric
                value={state.houseNumber}
                label=""
                placeholder="House"
                onChange={(value: string) =>
                  dispatch({ type: "houseNumber", payload: value })
                }
                width="sm"
                height="xl"
              ></Form.Alphanumeric>
            )}
            <div className="grow"></div>
            {state.houseNumber === "" ? null : (
              <Form.Alphanumeric
                value={state.unitNumber}
                label=""
                placeholder="Unit"
                onChange={(value: string) =>
                  dispatch({ type: "unitNumber", payload: value })
                }
                width="xs"
                height="xl"
              ></Form.Alphanumeric>
            )}
          </div>
          <div className="h-8"></div>
          <div className="grid gap-4">
            {state.houseNumber === "" ? null : (
              <Button clickAction={clickAdd} width="full" color="blue">
                Add
              </Button>
            )}
          </div>
        </Form>

        <AddSuburbModal
          isOpen={state.suburb === "adding suburb"}
          closeModal={dispatch}
          map={currentMapIndex()}
        />

        <AddStreetModal
          isOpen={state.street === "adding street"}
          closeModal={dispatch}
          map={currentMapIndex()}
          suburb={currentSuburbIndex()}
          mapDetails={mapDetails}
        />
      </div>
    </>
  );
};

export default AddAddress;
