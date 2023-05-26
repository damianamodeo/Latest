import { useState } from "react";
import Button from "@INPUTS/Button";
import Modal from "./components/Modal";

const TabComponent = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div className={`pb-16 grid place-items-center h-full`}>
      <Button
        clickAction={() => {
          setModelOpen(true);
        }}
        longPressAction={() => {
          setModelOpen(true);
        }}
        delay={500}
        color="green"
        width={"md"}
      >
        Open Modal
      </Button>
      {modelOpen && (
        <Modal isOpen={modelOpen} setModelOpen={setModelOpen}></Modal>
      )}
    </div>
  );
};

export default TabComponent;
