import React, { useState } from "react";
import cross from "../assets/cross.png";
import rightIcon from "../assets/rightIcon.png";
import whiteRight from "../assets/whiteRight.png";
import LoginPopup from "./LoginPopup";
import CreateAccountpopup from "./CreateAccountpopup";
import ForgetPasswordPopup from "./ForgetPasswordPopup";
import NewPasswordPopup from "./NewPasswordPopup";
import PriceingPopup from "./PriceingPopup";

function LogInButtonComponent({ mode}) {
    const [isOpen, setIsOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [priceing, setPriceing] = useState(false);
 

  const togglePriceing = () => {
    setPriceing(true);
  };

  const togglePopup = () => {
    setIsOpen(true);
    setForgetPassword(false);
    setNewPassword(false);
    setCreateAccount(false);
  };

  const toggleForgetPassword = () => {
    setForgetPassword(true);
    setIsOpen(false);
    setNewPassword(false);
    setCreateAccount(false);
  };

  const toggleSetNewPassword = () => {
    setNewPassword(true);
    setIsOpen(false);
    setForgetPassword(false);
    setCreateAccount(false);
  };

  const toggleCreateAccount = () => {
    setCreateAccount(true);
    setNewPassword(false);
    setIsOpen(false);
    setForgetPassword(false);
  };

  

  const closePopup = () => {
    setIsOpen(false);
    setForgetPassword(false);
    setNewPassword(false);
    setCreateAccount(false);
    setPriceing(false);
    setSearch(false);
  };
  return (
    <div className="flex" >
      <button
        className="w-20 hidden res-button lg:block sm:w-24 ml-4 bg-white rounded-xl text-black p-2 sm:p-3 font-semibold button-border dark:bg-black "
        onClick={togglePopup}
      >
        Log in
      </button>
      {isOpen && (
        <LoginPopup
          mode={mode}
          closePopup={closePopup}
          toggleForgetPassword={toggleForgetPassword}
          toggleCreateAccount={toggleCreateAccount}
        />
      )}

      {createAccount && (
        <CreateAccountpopup
          mode={mode}
          closePopup={closePopup}
          togglePopup={togglePopup}
        />
      )}

      {forgetPassword && (
        <ForgetPasswordPopup
          mode={mode}
          closePopup={closePopup}
          toggleSetNewPassword={toggleSetNewPassword}
          togglePopup={togglePopup}
        />
      )}

      {newPassword && <NewPasswordPopup mode={mode} closePopup={closePopup} />}

      <button
        className="w-24 hidden res-button lg:block lg:w-24 ml-4 bg-black hover:bg-zinc-600 transition-all rounded-xl text-white p-2 sm:p-3 font-semibold dark:bg-white dark:text-black "
        onClick={togglePriceing}
      >
        Get Pro
      </button>
      {priceing && (
        <PriceingPopup
          mode={mode}
          rightIcon={rightIcon}
          whiteRight={whiteRight}
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default LogInButtonComponent;
