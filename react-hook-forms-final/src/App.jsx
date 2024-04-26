import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Min 3 characters" })
      .max(10, { message: "Max 10 characters" }),
    email: z.string().email(),
    age: z.number(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password must be same",
    path: ["confirmPassword"],
  });

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    console.log(data);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <form
        className="w-96 p-6 shadow-lg bg-white rounded-md"
        onSubmit={handleSubmit(submitData)}
      >
        <h1 className="text-2xl text-center font-medium">Register Form</h1>
        <hr className="mt-3" />

        {/* Input field start */}

        <div className="mt-5 flex flex-col">
          <label className="text-base">Username</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="text"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Email</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Age</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="number"
            {...register("age")}
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Password</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Confirm Password</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {/* Input field end */}

        {/* Button field start */}
        <div className="flex justify-between mt-5">
          <button
            className="bg-white text-indigo-500 px-5 py-1 rounded-md font-semibold"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-indigo-500 text-white px-5 py-1 rounded-md hover:bg-indigo-600"
            type="submit"
          >
            Submit
          </button>
        </div>
        {/* Button field end */}
      </form>
    </div>
  );
}

export default App;
