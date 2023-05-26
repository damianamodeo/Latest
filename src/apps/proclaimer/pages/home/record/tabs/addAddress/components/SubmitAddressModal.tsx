import Button from "@INPUTS/Button";
import Modal from "@COMPONENTS/containers/Modal";
import { useEffect, useState } from "react";
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
  const [mapData, setMapData] = useState({ lng: 0, lat: 0, relevance: -1 });
  const [submitAnyway, setSubmitAnyway] = useState(false);

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
      title={""}
      height="lg"
    >
      <Center>
        <div className="h-full relative text-white">
          <Form>
            <div className="text-center text-lg font-bold m-1 pt-2 h-full">
              <div className="text-center m-4">
                {address.unitNumber}
                {address.unitNumber ? "/" : ""}
                {address.houseNumber} {address.street}, {address.suburb}
              </div>
              {mapData.relevance < 0 ? (
                <div>Loading</div>
              ) : mapData.relevance < 1 ? (
                <>
                  <span className={`text-orange-500`}>
                    WARNING!!!
                    <p className="mx-10 text-center text-base font-light">
                      Exact coordinates were not found for this address. Are you
                      sure you want to submit?
                    </p>
                  </span>
                  <div className="grid place-items-center gap-2 mt-10">
                    {!submitAnyway ? (
                      <>
                        <Button
                          color={"blue"}
                          width={"md"}
                          clickAction={() => closeModal(false)}
                        >
                          No
                        </Button>
                        <Button
                          color={"blue"}
                          width={"md"}
                          clickAction={() => setSubmitAnyway(true)}
                        >
                          Yes
                        </Button>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <span className={`text-green-500 text-base font-normal`}>
                    SUCCESS!!!
                    <p>Exact match found.</p>
                  </span>
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
                </>
              )}
            </div>
          </Form>
        </div>
      </Center>
    </Modal>
  );
};

export default SubmitAddressModal;
