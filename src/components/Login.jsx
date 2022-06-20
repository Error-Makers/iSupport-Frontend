import { useContext, useState } from "react";
import { AuthContect } from "../context/auth/main";

export default function Login(props) {
    const context = useContext(AuthContect);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        context.login(username, password);
      };
  return (
    <div className="login">
        <div>
          <h1>login</h1>
          <form onSubmit={handleLogin}>
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
              <button type="submit">Login</button>
            </label>

          </form>
        </div>
        <a onClick={props.toggleShow}>if you don't have </a>
  
    </div>
  );
}
