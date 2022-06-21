import { useContext, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { When } from "react-if";
import { AuthContect } from "./main";

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [signupPage, setSignupPage] = useState(true);
  const context = useContext(AuthContect);

  const signupHandller = (e) => {
    e.preventDefault();
    context.signup(username, password, Email, role);
  };

  return (
    <>
      {
        // signupPage?
        // <When condition = {!context.login}>

        // :
        <div>
          <h1>signup</h1>
          <form onSubmit={signupHandller}>
            <label>
              <span>username</span>
              <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                type="text"
                name="username"
              />
            </label>

            <br></br>
            <label>
              <span>password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                name="password"
              />
            </label>
            <br></br>

            <label>
              <span>Email</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                name="Email"
              />
            </label>

            <br></br>

            <label>
              <span>Role</span>
              <input
                onChange={(e) => setRole(e.target.value)}
                placeholder="role = [admin,user,writer,editor]"
                type="text"
                name="Role"
              />
            </label>
            <br></br>
            <label>
              <button type="submit">signup</button>
            </label>

            <label>
              {/* <Button type="button" onClick={() => setSignupPage(true)}>signin</Button> */}
            </label>
          </form>
        </div>
      }
    </>
  );
}
