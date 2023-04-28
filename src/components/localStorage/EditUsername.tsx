import Form from "@INPUTS/Form";
import { useState } from "react";

const EditUserID = () => {
  const [userID, setUserID] = useState(localStorage.getItem("username"));

  const onChange = (e: any) => {
    localStorage.setItem("username", e.target.value);
    setUserID(localStorage.getItem("username"));
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
