import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Img from "react-bootstrap/Image";
import { LoginContext } from "../context/auth/main";

export default function Signup(props) {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const signupHandller = (e) => {
    e.preventDefault();
    context.signup(username, password, firstname, lastname, Email, role);
    setTimeout(() => {
      props.toggleShow();
    }, 1000);
  };
  const parent = { margin: "1rem", padding: "2rem 2rem", textAlign: "center" };
  const child = {
    display: "inline-block",
    padding: "1rem 1rem",
    verticalAlign: "middle",
  };

  return (
    <>
      <div className="parent" style={parent}>
        <div className="child" style={child}>
          <Card
            style={{
              height: "70%",
              borderColor: "#673AB7",
              borderRadius: "40px",
            }}
          >
            <Card.Title style={{ color: "#311B92", padding: "3%" }}>
              Signup
            </Card.Title>

            <Card.Body>
              <form onSubmit={signupHandller}>
                <label style={{ width: "100%", alignContent: "center" }}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      aria-label="First name"
                      placeholder="Firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      aria-describedby="basic-addon1"
                      style={{ width: "1%" }}
                    />

                    <Form.Control
                      aria-label="Last name"
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Lastname"
                    />
                  </InputGroup>
                </label>
                <br></br>
                <label style={{ width: "100%" }}>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1">username</InputGroup.Text> */}
                    <Form.Control
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </label>

                <br></br>

                <label style={{ width: "100%" }}>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1">Email</InputGroup.Text> */}
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </label>

                <br></br>

                <label style={{ width: "100%" }}>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1">password</InputGroup.Text> */}
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </label>
                <br></br>

                <label style={{ width: "100%" }}>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1">Role</InputGroup.Text> */}
                    <DropdownButton
                      variant="outline-secondary"
                      title="Role"
                      id="input-group-dropdown-1"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <Dropdown.Item>admin</Dropdown.Item>
                      <Dropdown.Item>user</Dropdown.Item>
                      <Dropdown.Item>writer</Dropdown.Item>
                      <Dropdown.Item>editor</Dropdown.Item>
                      <Dropdown.Divider />
                    </DropdownButton>
                  </InputGroup>
                </label>

                <br></br>
                <label>
                  <Button
                    type="submit"
                    style={{
                      borderColor: "#673AB7",
                      background: "#673AB7",
                      borderRadius: "39px",
                      height: "39px",
                      width: "160px",
                    }}
                  >
                    Signup
                  </Button>
                  {/* <button type="submit">signup</button> */}
                </label>
              </form>
              <Button
                variant="link"
                style={{ fontSize: "10px", color: "#424242" }}
                onClick={props.toggleShow}
              >
                if you have an account
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* add something related to floating */}
        <div className="child" style={child}>
          <Img
            style={{ height: "40%", width: "80%" }}
            src="https://user-images.githubusercontent.com/75664971/174694686-5e46e440-ca17-42ac-ba09-4e488e56f285.svg"
          />
        </div>
      </div>
    </>
  );
}
