import { useFormContext } from "react-hook-form";
import Label from "./UI/Label";
import Title from "./UI/Title";

type Inputs = {
  username: string;
  email: string;
};

function FormA() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Title>User Information</Title>
      <div className="mb-4">
        <Label>Name</Label>
        <input
          type="text"
          id="username"
          className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="John Smith"
          defaultValue=""
          {...register("username", {
            required: "Please enter your username",
          })}
        />
        {errors.username && (
          <p className="text-sm text-red-600 mt-2">{errors.username.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Label>Email</Label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="you@example.com"
          defaultValue=""
          {...register("email")}
        />
      </div>
    </div>
  );
}

export default FormA;
