import { createContext } from "react";
import { useState } from "react";
export const SigninContext = createContext();
export const SigninContextProvider = ({ children }) => {
  const [model, setModel] = useState(false);
  const [signupModel, setSignupModel] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [confirm,setConfirm] = useState(false);
  const [signup,setSignup] = useState()
  const handleModel = () => {
    setSignupModel(false);
    setModel(model ? false : true);
  };
  const handleSignupModel = () => {
    setModel(false);
    setSignupModel(signupModel ? false : true);
  };
  const handleOtp = () => {
    setSignupModel(false);
    setModel(false);
    setVerifyOtp(verifyOtp ? false : true);
  };
  const handleConfirmation = () => {
    setConfirm(confirm ? false : true)
  };
  const [final, setFinal] = useState("");
  const handleSetFinal = (e) => {
    setFinal(e);
  };
  const handleSignupData = (payload)=>{
   setSignup(payload)
  }
  return (
    <SigninContext.Provider
      value={{
        model,
        handleModel,
        signupModel,
        handleSignupModel,
        verifyOtp,
        handleOtp,
        final,
        handleSetFinal,
        confirm,
        handleConfirmation,
        handleSignupData,
        signup
      }}
    >
      {children}
    </SigninContext.Provider>
  );
};