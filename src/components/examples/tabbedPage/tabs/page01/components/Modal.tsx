import Modal from "@CONTAINERS/Modal";
import Button from "@INPUTS/Button";

type ModalComponentType = {
  isOpen: any;
  setModelOpen: any;
};

const ModalComponent = ({ isOpen, setModelOpen }: ModalComponentType) => {
  return (
    <Modal onClose={() => {}} title="Modal" isOpen={isOpen} height="md">
      <div className="grid place-items-center h-full">
        <Button
          width={"md"}
          clickAction={() => {
            setModelOpen(false);
          }}
          color={"red"}
        >
          Close Modal
        </Button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
