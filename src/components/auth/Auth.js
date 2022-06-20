import { useContext } from "react";
import { AuthContect } from "./main";
import {When} from "react-if"; 

export default function Auth(props) {
    const context = useContext(AuthContect);
    const canDo1 = context.canDO(props.permission);
}

return(
    <When condition={context.isLoggedIn && canDo1}>
        {props.children}
    </When>
)