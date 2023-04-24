import Form from "@INPUTS/Form";
import { useState } from "react";

type WriteType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};
const values = ["hello", "goodbye", "1"];
const Write = ({ changeSubpage }: WriteType) => {
  const [value, setValue] = useState(values[0]);
  const [query, setQuery] = useState("");

  const filteredValues =
    query === ""
      ? values
      : values.filter((value) =>
          value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={``}>
      <Form>
        {
          <Form.Autocomplete
            value={value}
            options={filteredValues}
            onSelect={(value) => setValue(value)}
            onChange={(event) => setQuery(event.target.value)}
            width="md"
          ></Form.Autocomplete>
        }
        test
      </Form>
    </div>
  );
};

export default Write;
