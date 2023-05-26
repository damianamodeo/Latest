import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Autocomplete from "./Autocomplete";
import Select from "./Select";
import Text from "./Text";
import Number from "./Number";
import Alphanumeric from "./Alphanumeric";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};


const Form = ({ zodSchema, children }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange", resolver: zodResolver(zodSchema) });

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data);
  };
  return (
    <form onSubmit={handleSubmit(submitData)} className="flex flex-col w-full">
      {children}
    </form>
  );
};

Form.Autocomplete = Autocomplete
Form.Select = Select
Form.Text = Text
Form.Number = Number
Form.Alphanumeric = Alphanumeric

export default Form;
