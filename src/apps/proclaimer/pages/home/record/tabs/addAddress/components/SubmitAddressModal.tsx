import Button from "@INPUTS/Button";
import Modal from "@COMPONENTS/containers/Modal";
import addStreet from "@SERVICES/firebase/addStreet";
import searchStreet from "@SERVICES/mapbox/searchStreet";
import { ChangeEvent, useEffect, useState } from "react";
import Form from "@INPUTS/Form";
import Center from "@CONTAINERS/Center";
import getAddressCoordinates from "@SERVICES/mapbox/getAddressCoordinates";
import addNotAtHome from "@SERVICES/firebase/addNotAtHome";

type SubmitAddressModalType = {
  closeModal: any;
  map: number;
  suburb: number;
  mapDetails: {
    id: string;
    suburbs: {
      name: string;
      bbox: number[];
      streets: { name: string; lng: number; lat: number }[];
    }[];
  }[];
};

const SubmitAddressModal = ({
  closeModal,
  address,
  streetCoordinates,
  bbox,
  dispatch,
}: any) => {
  const [mapData, setMapData] = useState({ lng: 0, lat: 0, relevance: 0 });

  const getMapData = async () => {
    const mapData = await getAddressCoordinates({ ...address, bbox });
    setMapData(mapData);
  };

  const submitAddress = async (letter: boolean) => {
    await addNotAtHome({
      ...mapData,
      ...address,
      calls: [Date.now()],
      cong: "australia_nsw_maitland",
      streetCoordinates,
      letter,
    });
    if (address.unitNumber === "") {
      dispatch({ type: "houseNumber", payload: "" });
    }
    dispatch({ type: "unitNumber", payload: "" });
    closeModal(false);
  };

  useEffect(() => {
    getMapData();
  }, []);

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        return;
      }}
      title={"Confirm Address"}
      height="lg"
    >
      <Center>
        <div className="h-full relative text-white">
          <Form>
            <div className="text-center m-4">
              {mapData.relevance === 1 ? (
                <span className={`text-green-500`}>Exact match was found.</span>
              ) : (
                <span className={`text-orange-500`}>
                  WARNING! An exact match was not found. Please check details
                  before submitting this address.
                </span>
              )}
            </div>
            <div className="text-center m-4">
              {address.unitNumber}
              {address.unitNumber ? "/" : ""}
              {address.houseNumber} {address.street}, {address.suburb}{" "}
            </div>
            <Center style="gap-5 mt-4">
              <Button
                color={"blue"}
                width={"md"}
                clickAction={() => closeModal(false)}
              >
                cancel
              </Button>
              <Button
                color={"blue"}
                width={"md"}
                clickAction={() => submitAddress(true)}
              >
                Letter List
              </Button>
              <Button
                color={"blue"}
                width={"md"}
                clickAction={() => submitAddress(false)}
              >
                Return List
              </Button>
            </Center>
          </Form>
        </div>
      </Center>
    </Modal>
  );
};

export default SubmitAddressModal;
