/** @format */

import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

const Register = () => {
  const {
    account,
    setAccount,
    name,
    setIsName,
    username,
    setIsUsername,
    password,
    setIsPassword,
  } = useStateContext();

  return (
    <div className="flex flex-col gap-4 mb-7 text-black">
      <input
        value={name}
        onChange={(e) => setIsName(e.currentTarget.value)}
        type="text"
        placeholder="Name"
        className="text-[14px] rounded-md py-2 px-5"
      />
      <input
        value={username}
        onChange={(e) => setIsUsername(e.currentTarget.value)}
        type="text"
        placeholder="Username"
        className="text-[14px] rounded-md py-2 px-5"
      />
      <input
        onChange={(e) => setIsPassword(e.currentTarget.value)}
        min={8}
        max={15}
        value={password}
        type="password"
        placeholder="Password"
        className="text-[14px] rounded-md py-2 px-5"
      />
    </div>
  );
};

export default Register;
