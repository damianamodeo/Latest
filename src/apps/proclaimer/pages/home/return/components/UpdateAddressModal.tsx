import Center from "@CONTAINERS/Center";
import Modal from "@CONTAINERS/Modal";
import Button from "@INPUTS/Button";
import deleteNotAtHome from "@SERVICES/firebase/deleteNotAtHome";
import updateNotAtHome from "@SERVICES/firebase/updateNotAtHome";

type UpdateAddressModalType = {
  isOpen: any;
  address: any;
  setUpdateModelOpen: any;
};

const UpdateAddressModal = ({
  isOpen,
  address,
  setUpdateModelOpen,
}: UpdateAddressModalType) => {
  return (
    <Modal onClose={() => {}} title="" isOpen={isOpen} height="md">
      <div className="h-full text-center text-xl dark:text-white">
        {address.unitNumber && `${address.unitNumber}/`}
        {address.houseNumber} {address.street}, {address.suburb}
      </div>
      <Center>
        <div className="grid gap-3">
          <Button
            width={"md"}
            clickAction={() => setUpdateModelOpen(false)}
            color={"blue"}
          >
            cancel
          </Button>
          <Button
            width={"md"}
            clickAction={() => {
              updateNotAtHome(address, "letter", true);
              // setUpdateModelOpen(false);
            }}
            color={"blue"}
          >
            Letter List
          </Button>
          <Button
            width={"md"}
            clickAction={() => {
              deleteNotAtHome(address);
              setUpdateModelOpen(false);
            }}
            color={"blue"}
          >
            Delete
          </Button>
        </div>
      </Center>
    </Modal>
  );
};

export default UpdateAddressModal;
