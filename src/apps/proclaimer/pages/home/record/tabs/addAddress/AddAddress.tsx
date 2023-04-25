import { useEffect, useReducer, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { fdb } from "@SERVICES/firebase/config";
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
  const asd: { [key: string]: any } = {
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

  return asd[action.type];
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

const AddAddress = () => {
  const [state, dispatch]: ReducerType = useReducer(reducer, {
    mapID: "init",
    suburb: "init",
    street: "init",
    houseNumber: "",
    unitNumber: "",
  });

  const [mapDetails, setMapDetails] = useState<
    {
      id: string;
      suburbs: { name: string; bbox: number[]; streets: [] }[];
    }[]
  >([]);
  const currentMapIndex = () => {
    return Math.max(
      0,
      mapDetails.findIndex((map: any) => map.id == state.mapID)
    );
  };

  const currentSuburbIndex = () => {
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

  const clickAdd = async () => {
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
      user: "xxx",
      calls: [Date.now()],
      cong: "australia_nsw_maitland",
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
          (street: any) => street
        );

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fdb, "australia_nsw_maitland", "maps"),
      (doc) => {
        if (doc.data()) {
          setMapDetails(doc.data()?.mapDetails);
        }
      }
    );
    return () => {
      unsub();
    };
  }, []);

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
              <Form.Number
                value={state.houseNumber}
                label=""
                placeholder="House"
                onChange={(e: any) =>
                  dispatch({ type: "houseNumber", payload: e.target.value })
                }
                width="sm"
                height="xl"
              ></Form.Number>
            )}
            <div className="grow"></div>
            {state.houseNumber === "" ? null : (
              <Form.Number
                value={state.unitNumber}
                label=""
                placeholder="Unit"
                onChange={(e) =>
                  dispatch({ type: "unitNumber", payload: e.target.value })
                }
                width="xs"
                height="xl"
              ></Form.Number>
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
