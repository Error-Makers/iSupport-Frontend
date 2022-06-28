import { useContext } from "react";
import { LoginContext } from "./main";
import { When } from "react-if";

export default function Auth(props) {
  const login = useContext(LoginContext);

  const isLoggedIn = login.loggedIn;
  const can = props.capability ? login.canDo(props.capability) : true;

  return <When condition={isLoggedIn && can}>{props.children}</When>;
}
