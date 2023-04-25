import Form from "@INPUTS/Form";
import { useState } from "react";

const EditUserID = () => {
  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  const onChange = (e: any) => {
    localStorage.setItem("userID", e.target.value);
    setUserID(localStorage.getItem("userID"));
  };
  return (
    <div className={``}>
      <Form>
        <Form.Text
          label="Username"
          value={userID}
          width="md"
          onChange={onChange}
        ></Form.Text>
      </Form>
    </div>
  );
};

export default EditUserID;
