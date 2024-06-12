import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        action=""
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
        <p>
          <small>Error message</small>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
