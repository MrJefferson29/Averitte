import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthContextProvider = props => {

  const [activeUser, setActiveUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [config, setConfig] = useState({
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  })


  useEffect(() => {

    const controlAuth = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setActiveUser({});
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get("https://sparko-tracking.onrender.com/auth/private", config);
        setActiveUser(data.user)
      }
      catch (error) {

        localStorage.removeItem("authToken");

        setActiveUser({})
      }
      finally {
        setLoading(false);
      }
    };
    controlAuth()

  }, [])

  return (
    <AuthContext.Provider value={{ activeUser, setActiveUser, config, setConfig, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
