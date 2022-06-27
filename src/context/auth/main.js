import React from "react";
import { useState, useEffect } from "react";
import base64 from "base-64";
import jwt_decode from "jwt-decode";
import cookie from "react-cookies";
import axios from "axios";

export const AuthContect = React.createContext();

const API = "https://isupport-backend-super.herokuapp.com";
export default function AuthProvider(props) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  // login username
  const login = async (username, password) => {
    const encodePassworde = base64.encode(`${username}:${password}`);
    const response = await (
      await axios.post(`${API}/signin`)
    ).set("authorization", `Basic ${encodePassworde}`);
    //
    validateUser(response.data.token);
  };
  const createCommunity = async (communityName, description) => {
    let communityData = {
      community_name: communityName,
      community_desc: description,
    };
    console.log(communityData.community_name + "ttttttttttt");
    const config = {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvc28iLCJpYXQiOjE2NTU5ODA2Mzd9.nNIT6AoxD0_vn8tHCLczCEjgDaos9riMV8oqdByS6Bc"}`,
      },
    };
    const response = await axios.post(
      `${API}/community`,
      communityData,
      config
    );
    console.log({ response });

    validateUser(response.data.token);
  };
  // console.log(createCommunity);
  const signup = async (
    username,
    password,
    firstname,
    lastname,
    Email,
    role
  ) => {
    let userData = {
      username: username,
      password: password,
      firstname: firstname,
      lastName: lastname,
      Email: Email,
      role: role,
    };
    console.log(userData, "userData");

    const response = await axios.post(`${API}/signup`, userData);
    validateUser(response.data.token);
  };

  const validateUser = (token) => {
    if (token) {
      const user = jwt_decode(token);
      loginState(true, user);
      cookie.save("token", token);
    } else {
      loginState(false, {});
    }
  };

  const loginState = (isLoggedIn, user) => {
    setIsLoggedIn(isLoggedIn);
    setUser(user);
  };

  const logout = () => {
    cookie.remove("token");
    loginState(false, {});
  };

  useEffect(() => {
    const userInfo = cookie.load("token");
    validateUser(userInfo);
    setToken(userInfo);
  }, []);

  const canDo = (permission) => {
    return user ? user.permissions.includes(permission) : false;
  };

  const state = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
    canDo,
    token,
    createCommunity,
  };

  return (
    <AuthContect.Provider value={state}>{props.children}</AuthContect.Provider>
  );
}
