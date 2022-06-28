import React, { useEffect, useState } from "react";
import base64 from "base-64";
import cookie from "react-cookies";
import superagent from "superagent";
import axios from "axios";
import jwt from "jwt-decode";

const API = process.env.REACT_APP_SERVER;
export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (username, password) => {
    console.log(username, password);
    const response = await superagent
      .post(`${API}signin`)
      .set(
        "authorization",
        `Basic ${base64.encode(`${username}:${password}`)}`
      );
    validateMyUser(response.body);
  };

  const signup = async (username, password, firstName, lastName, email) => {
    let userData = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    };
    const response = await axios.post(`${API}signup`, userData);
  };

  const validateMyUser = (data) => {
    if (data) {
      const validUser = jwt(data.token);
      if (validUser) {
        setLoginstate(true, data);
        cookie.save("userData", data);
      } else {
        setLoginstate(false, {});
      }
    } else {
      setLoginstate(false, {});
    }
  };

  const setLoginstate = (isLogged, userData) => {
    setLoggedIn(isLogged);
    setUser(userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
    cookie.remove("userData");
  };

  useEffect(() => {
    const myUserInfo = cookie.load("userData");
    validateMyUser(myUserInfo);
  }, []);

  const canDo = (permission) => {
    return user ? user.permissions.includes(permission) : false;
  };

  const state = {
    loggedIn,
    user,
    login,
    logout,
    canDo,
    signup,
  };

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}

// const createCommunity = async (communityName, description) => {
//   let communityData = {
//     community_name: communityName,
//     community_desc: description
//   };
//   console.log(communityData.community_name+'ttttttttttt');
//   const config = {
//     headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvc28iLCJpYXQiOjE2NTU5ODA2Mzd9.nNIT6AoxD0_vn8tHCLczCEjgDaos9riMV8oqdByS6Bc"}` },
//   };
//   const response = await axios.post(`${API}/community`, communityData,config);
//   console.log({response});

//   validateUser(response.data.token);
// };
// console.log(createCommunity);
