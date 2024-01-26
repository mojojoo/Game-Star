/** @format */

import React, { useEffect, useState } from "react";
import _login from "../../public/login.jpg";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const AuthPage = () => {
  const [choices, setIsChoices] = useState("Login");
  const navigate = useNavigate();
  const {
    isLogin,
    setIsLogin,
    name,
    username,
    password,
    setAccount,
    account,
    loginAccount,
    setLoginAccount,
    isAuthenticated,
  } = useStateContext();

  const _choices = choices === "Login" ? "Sign-in" : "Register";

  const handleAuthAcc = (auth) => {
    setIsChoices(auth);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (name.length < 5 || username.length < 8 || password.length < 8) return;
    setAccount({
      name,
      username,
      password,
    });

    localStorage.setItem("account", JSON.stringify(account));
    console.log(account);
    setIsChoices("Register");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const accountInfo = JSON.parse(localStorage.getItem("account"));
    if (
      accountInfo.username !== loginAccount.username ||
      accountInfo.password !== loginAccount.password
    )
      return;

    setIsLogin(() => !isLogin);

    console.log(isLogin);

    localStorage.setItem("loginSucces", JSON.stringify(isLogin));

    navigate("/");

    setLoginAccount({
      username: "",
      password: "",
    });
  };

  const handleSubmit = () => {
    console.log(choices);
    if (choices === "Register") {
      setIsChoices("Login");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    /*  console.log(isLogin); */
  }, [navigate]);

  return (
    <section className="h-screen flex  w-full absolute z-[99999] bg-[#120b32] text-white">
      <div className="md:w-[50%] w-full flex items-center justify-center flex-col gap-3 md:px-0 px-8">
        <h1 className="font-bold text-[3rem]">{_choices}</h1>
        <p className="text-[0.8rem] mb-7">
          {_choices} now and start your streaming journey
        </p>
        <form
          className=" md:w-[50%] w-full"
          onSubmit={choices === "Login" ? handleLogin : handleRegister}
        >
          {choices === "Login" ? <Login /> : <Register />}
          <motion.button
            whileHover={{ scale: 1.01 }}
            type="submit"
            onClick={() => handleSubmit()}
            className="w-full border-2 rounded-lg py-1 text-[19px] font-bold hover:bg-[#321b60] transition-colors"
          >
            {choices === "Login" ? "Login" : "Submit"}
          </motion.button>
        </form>
        <div className="flex items-center justify-between md:w-[50%] w-full py-3 text-[14px]">
          <Link
            to="/404"
            className={`md:text-[15px] text-[12px] ${
              choices === "Login" ? "" : "hidden"
            }`}
          >
            forgot password?
          </Link>

          <button
            onClick={() =>
              choices === "Login"
                ? handleAuthAcc("Register")
                : handleAuthAcc("Login")
            }
            className="md:text-[15px] text-[12px]"
          >
            {choices === "Login" ? "Create Account" : "Already have account?"}
          </button>
        </div>
      </div>
      <div className="md:block hidden w-[50%] h-full">
        <img className="w-full h-full object-cover" src={_login} alt="" />
      </div>
    </section>
  );
};

export default AuthPage;
