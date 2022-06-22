import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import MainContexProvider from "../context/auth/main";
import { When } from "react-if";

export default function AuthComponent(props) {
  const [showLogin, setShowLogin] = useState(true);
  const toggleShow = () => {
    setShowLogin(!showLogin);
  };
  return (
    <MainContexProvider>
      <When condition={showLogin}>
        <Login toggleShow={toggleShow} />
      </When>
      <When condition={!showLogin}>
        <Signup toggleShow={toggleShow} />
      </When>
    </MainContexProvider>
  );
}
