/** @format */

import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Login = () => {
  const { loginAccount, setLoginAccount } = useStateContext();

  const handleChange = (e) => {
    setLoginAccount({
      ...loginAccount,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex flex-col gap-4 mb-7 text-black">
      <input
        value={loginAccount.username}
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Username"
        className="text-[14px] rounded-md py-2 px-5"
      />
      <input
        value={loginAccount.password}
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
        className="text-[14px] rounded-md py-2 px-5"
      />
    </div>
  );
};

export default Login;
