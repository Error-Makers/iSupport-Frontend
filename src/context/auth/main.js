import React from "react";
import { useState, useEffect } from "react";
import base64 from "base-64";
import jwt_decode from 'jwt-decode';
import cookie from 'react-cookies';
import axios from "axios";

export const AuthContect = React.createContext();

const API = "https://halaauth-api.herokuapp.com";

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

  const signup = async (username, password, Email, role) => {
    let userData = {
      username: username,
      password: password,
      Email: Email,
      role: role,
    };
    console.log(userData, "userData");

    const response = await axios.post(`${API}/signup`, userData);
    validateUser(response.data.token);
  };

  const validateUser = (token) => {
    if(token){
        const user =  jwt_decode(token);
        loginState(true,user);
        cookie.save("token", token);
    }
    else{
        loginState(false,{});
    }
  }

  const loginState = (isLoggedIn,user) => {
    setIsLoggedIn(isLoggedIn);
    setUser(user);
  }

    const logout = () => {
        cookie.remove("token");
        loginState(false,{});
    }

    useEffect(() => {
        const userInfo = cookie.load("token");
        validateUser(userInfo);
        setToken(userInfo);
    },[]);

    const canDo = (permission) => {
        return user ? user.permissions.includes(permission) : false;
    }

    const state = {
        user,
        isLoggedIn,
        login,
        signup,
        logout,
        canDo,
        token,
    }

    return(
        <AuthContect.Provider value={state}>
            {props.children}
        </AuthContect.Provider>
    )
}
