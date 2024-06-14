"use client";
import { useFormState } from "react-dom";
import { authentificate } from "../lib/user.action.js";

const LoginForm = () => {
  const [state, formAction] = useFormState(authentificate, undefined);
  return (
    <form
      action={formAction}
      className="w-[400px] max-h-max flex flex-col  items-center bg-bgSoft p-5 rounded-md gap-5"
    >
      <h3 className="text-2xl font-semibold text-text">Login</h3>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="p-3 border-none outline-none bg-bg w-full rounded-md placeholder:text-sm"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-3 border-none outline-none bg-bg w-full rounded-md placeholder:text-sm"
      />
      <button className="p-3 w-full bg-teal-600 font-bold rounded-md">
        Login
      </button>
      <p className="text-pink-600 font-semibold text-lg">
        <small>{state?.error}</small>
      </p>
    </form>
  );
};

export default LoginForm;
