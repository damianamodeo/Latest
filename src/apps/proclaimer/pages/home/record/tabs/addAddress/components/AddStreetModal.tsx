import Button from "@INPUTS/Button";
import Modal from "@COMPONENTS/containers/Modal";
import addStreet from "@SERVICES/firebase/addStreet";
import searchStreet from "@SERVICES/mapbox/searchStreet";
import { ChangeEvent, useState } from "react";
import Form from "@INPUTS/Form";

type AddStreetModalType = {
  isOpen: boolean;
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

const AddStreetModal = ({
  isOpen,
  closeModal,
  map,
  suburb,
  mapDetails,
}: AddStreetModalType) => {
  const [streetQuery, setStreetQuery] = useState({
    street: "",
    lng: 0,
    lat: 0,
  });
  const [streetOptions, setStreetOptions] = useState<
    { place_name: string; text: string }[]
  >([]);

  const onSearchStreetChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 2) {
      setStreetOptions([]);
      return;
    }

    setStreetQuery({ street: event.target.value, lng: 0, lat: 0 });
    const options = await searchStreet(
      streetQuery.street,
      mapDetails[map].suburbs[suburb].bbox,
      mapDetails[map].suburbs[suburb].name,
      "australia"
    );

    if (options) {
      setStreetOptions(options);
    }
  };

  const handleAdd = () => {
    addStreet({
      cong: "australia_nsw_maitland",
      mapID: map,
      suburb: suburb,
      street: streetQuery.street,
      coordinates: { lng: streetQuery.lng, lat: streetQuery.lat },
    });
    closeModal({ type: "street", payload: streetQuery.street });
    setStreetQuery({ street: "", lng: 0, lat: 0 });
    setStreetOptions([]);
  };

  const handleCancel = () => {
    closeModal({ type: "street", payload: "init" });
    setStreetQuery({ street: "", lng: 0, lat: 0 });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        return;
      }}
      title={"Add Street"}
      height="lg"
    >
      <div className="h-full relative">
        <Form>
          <div className="flex justify-evenly m-4">
            <Form.Autocomplete
              value={streetQuery.street}
              onChange={(e) => {
                onSearchStreetChange(e);
              }}
              onSelect={(e) => {
                console.log(e.props.children[0].props.id);
                setStreetQuery({
                  street: e.props.children[0].props.children,
                  lng: e.props.children[0].props.id[0],
                  lat: e.props.children[0].props.id[1],
                });
              }}
              options={streetOptions.map((option: any, index: number) => (
                <>
                  <div className="font-bold" id={option.center}>
                    {option.text}
                  </div>
                  <div className="text-xs">
                    {option.place_name.split(", ")[1]}
                  </div>
                </>
              ))}
              width="lg"
            ></Form.Autocomplete>
            <div className="flex gap-2 m-auto absolute bottom-0 justify-evenly w-full">
              <Button color="blue" clickAction={handleCancel} width="sm">
                Cancel
              </Button>
              {streetOptions
                .map((o) => o.text)
                .includes(streetQuery.street) && (
                <Button color="blue" clickAction={handleAdd} width="sm">
                  Add
                </Button>
              )}
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddStreetModal;
