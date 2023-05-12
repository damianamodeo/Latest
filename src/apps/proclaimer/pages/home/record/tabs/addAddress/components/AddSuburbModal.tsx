import Button from "@INPUTS/Button";
import Modal from "@COMPONENTS/containers/Modal";
import addSuburb from "@SERVICES/firebase/addSuburb";
import searchSuburb from "@SERVICES/mapbox/searchSuburb";
import { ChangeEvent, useEffect, useState } from "react";
import Form from "@INPUTS/Form";

type AddSuburbModalType = {
  isOpen: boolean;
  closeModal: any;
  map: number;
};

const AddSuburbModal = ({ isOpen, closeModal, map }: AddSuburbModalType) => {
  const [suburbQuery, setSuburbQuery] = useState<string>("");
  const [bbox, setBbox] = useState<number[]>([]);
  const [suburbOptions, setSuburbOptions] = useState<
    (string | number | JSX.Element | any)[]
  >([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const onSearchSuburbChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSuburbQuery(event.target.value);
    if (event.target.value.length <= 2) {
      setSuburbOptions([]);
      return;
    }
    const options = await searchSuburb(event.target.value);
    setSearchResults(
      options.map((option: any, index: number) => {
        return {
          display: (
            <div className={`${index} font-semibold`}>
              {option.text}
              <div className={`text-sm font-light dark:text-neutral-200`}>
                {option.place_name}
              </div>
            </div>
          ),
          ...option,
        };
      })
    );
  };

  const onSelect = (e: any) => {
    setBbox(searchResults[e.props.className[0]].bbox);
    setSuburbQuery(e.props.children[0]);
  };

  const handleAdd = () => {
    addSuburb({
      cong: "australia_nsw_maitland",
      mapID: map,
      suburb: suburbQuery,
      bbox: bbox,
    });
    closeModal({ type: "suburb", payload: suburbQuery });
    setSuburbQuery("");
    setSuburbOptions([]);
  };
  const handleCancel = () => {
    closeModal({ type: "suburb", payload: "init" });
    setSuburbQuery("");
  };

  useEffect(() => {
    setSuburbOptions(searchResults.map((option: any) => option.display));
    return () => {
      return;
    };
  }, [searchResults]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        return;
      }}
      title={"Add Suburb"}
      height="lg"
    >
      <div className="h-full relative">
        <Form>
          <div className="flex justify-around m-4">
            <Form.Autocomplete
              value={suburbQuery}
              onChange={(e) => onSearchSuburbChange(e)}
              onSelect={onSelect}
              options={suburbOptions}
              width="lg"
            ></Form.Autocomplete>
            <div className="flex gap-2 m-auto-xx absolute bottom-0 justify-evenly w-fit">
              <Button color="blue" clickAction={handleCancel} width="sm">
                Cancel
              </Button>
              {suburbOptions
                .map((o) => o.props.children[0])
                .includes(suburbQuery) && (
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

export default AddSuburbModal;
