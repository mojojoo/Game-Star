/** @format */

import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialDatas = {
  isRightBar: false,
};

export const ContextProvider = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("loginSucces"));

  const [initialData, setInitialData] = useState(initialDatas);
  const [isLogin, setIsLogin] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [account, setAccount] = useState({});
  const [name, setIsName] = useState("");
  const [username, setIsUsername] = useState("");
  const [password, setIsPassword] = useState("");
  const [loginAccount, setLoginAccount] = useState({
    username: "",
    password: "",
  });
  const handleActiveButton = (name) => {
    setActiveButton(name);
  };
  return (
    <StateContext.Provider
      value={{
        initialData,
        setInitialData,
        handleActiveButton,
        activeButton,
        scrolled,
        setScrolled,
        isLogin,
        setIsLogin,
        account,
        setAccount,
        name,
        setIsName,
        username,
        setIsUsername,
        password,
        setIsPassword,
        loginAccount,
        setLoginAccount,
        isAuthenticated,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
