import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

const Form = () => {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange", resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data);
  };
  return (
    <form onSubmit={handleSubmit(submitData)} className="flex flex-col">
      <label> First Name: </label>
      <input
        className="border h-10 w-80"
        type="text"
        {...register("firstName")}
      />
      <div className="h-12">
        {errors.firstName && (
          <span className="text-red-500"> {errors.firstName.message}</span>
        )}
      </div>
      <label> Last Name: </label>
      <input
        className="border h-10 w-80"
        type="text"
        {...register("lastName")}
      />
      <div className="h-12">
        {errors.lastName && (
          <span className="text-red-500"> {errors.lastName.message}</span>
        )}
      </div>
      <label> Email: </label>
      <input className="border h-10 w-80" type="email" {...register("email")} />
      <div className="h-12">
        {errors.email && (
          <span className="text-red-500"> {errors.email.message}</span>
        )}
      </div>
      <label> Age </label>
      <input
        className="border h-10 w-80"
        type="number"
        {...register("age", { valueAsNumber: true })}
      />
      <div className="h-12">
        {errors.age && (
          <span className="text-red-500"> {errors.age.message}</span>
        )}
      </div>
      <label> Password: </label>
      <input
        className="border h-10 w-80"
        type="password"
        {...register("password")}
      />
      <div className="h-12">
        {errors.password && (
          <span className="text-red-500"> {errors.password.message}</span>
        )}
      </div>
      <label> Confirm Password: </label>
      <input
        className="border h-10 w-80"
        type="password"
        {...register("confirmPassword")}
      />
      <div className="h-12">
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>

      <input className="border h-10 w-80 bg-slate-300 mt-12" type="submit" />
    </form>
  );
};

export default Form;
