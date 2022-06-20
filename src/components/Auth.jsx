import { useContext } from "react";
import { AuthContect } from "../context/auth/main";
import { When } from "react-if";

export default function Auth(props) {
  const context = useContext(AuthContect);
  const canDo = context.canDO(props.permission);
  return <When condition={context.isLoggedIn && canDo}>{props.children}</When>;
}
