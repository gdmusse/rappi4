import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState("");

  return (
    <GlobalStateContext.Provider
      value={{
        openAlert,
        setOpenAlert,
        alertMsg,
        setAlertMsg,
        alertSeverity,
        setAlertSeverity,
        token,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
