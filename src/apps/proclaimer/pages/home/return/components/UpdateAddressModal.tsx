import Center from "@CONTAINERS/Center";
import Modal from "@CONTAINERS/Modal";
import Button from "@INPUTS/Button";
import deleteNotAtHome from "@SERVICES/firebase/deleteNotAtHome";
import updateNotAtHome from "@SERVICES/firebase/updateNotAtHome";

type UpdateAddressModalType = {
  isOpen: any;
  address: any;
  setModalOpen: any;
};

const UpdateAddressModal = ({
  isOpen,
  address,
  setModalOpen,
}: UpdateAddressModalType) => {
  return (
    <Modal
    isOpen={isOpen}
    onClose={() => {
      return;
    }}
    title=""
    height="md"
  >
    <div className="h-full text-center text-xl dark:text-white">
      {address?.unitNumber && `${address?.unitNumber}/`}
      {address?.houseNumber} {address?.street}, {address?.suburb}
    </div>
    <div className="grid place-items-center gap-4">
      <Button
        width={"md"}
        clickAction={() => setModalOpen(false)}
        color={"blue"}
      >
        cancel
      </Button>
      <Button
        width={"md"}
        clickAction={() => {
          updateNotAtHome(address, "letter", true);
          setModalOpen(false);
        }}
        color={"blue"}
      >
        Letter List
      </Button>
      <Button
        width={"md"}
        clickAction={() => {
          deleteNotAtHome(address);
          setModalOpen(false);
        }}
        color={"blue"}
      >
        Delete
      </Button>
    </div>
  </Modal>
  );
};

export default UpdateAddressModal;
