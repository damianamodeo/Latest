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
    suburbs: { name: string; bbox: number[]; streets: [] }[];
  }[];
};

const AddStreetModal = ({
  isOpen,
  closeModal,
  map,
  suburb,
  mapDetails,
}: AddStreetModalType) => {
  const [streetQuery, setStreetQuery] = useState<string>("");
  const [streetOptions, setStreetOptions] = useState<
    { place_name: string; text: string }[]
  >([]);

  const onSearchStreetChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 2) {
      setStreetOptions([]);
      return;
    }

    setStreetQuery(event.target.value);
    const options = await searchStreet(
      streetQuery,
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
      street: streetQuery,
    });
    closeModal({ type: "street", payload: streetQuery });
    setStreetQuery("");
    setStreetOptions([]);
  };

  const handleCancel = () => {
    closeModal({ type: "street", payload: "init" });
    setStreetQuery("");
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
              value={streetQuery}
              onChange={(e) => {
                onSearchStreetChange(e);
              }}
              onSelect={(e) => {
                setStreetQuery(e.props.children[0].props.children);
              }}
              options={streetOptions.map((option: any) => (
                <>
                  <div className="font-bold">{option.text}</div>
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
              {streetOptions.map((o) => o.text).includes(streetQuery) && (
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
