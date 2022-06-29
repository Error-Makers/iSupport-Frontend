import { useContext, useState, useRef } from "react";
import { LoginContext } from "../context/auth/main";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Parent1 = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`;
const Child1 = styled.div`
  background-color: #fff;
  // padding: 70px 20px 10px 70px;
  width: 35%;
  display: table-cell;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image1 = styled.div`
  // background: url("https://user-images.githubusercontent.com/75664971/175835750-ea519f51-9753-4e1f-b75c-85035ca2d89f.png") no-repeat fixed right;

  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url("https://user-images.githubusercontent.com/75664971/175835750-ea519f51-9753-4e1f-b75c-85035ca2d89f.png");

  // background: linear-gradient(to right,#673ab7,#e91e63) no-repeat fixed right;
  object-fit: cover;
  background-size: 100%;
  width: 65%;

  display: table-cell;
  hight: 100%;
`;

const Text1 = styled.h1`
  font-size: 1.5em;
  // color:#e91e63;
  color: var(--Primary-Main);
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const FormStyle1 = styled.div`
  width: 100%;
  color: #673ab7;
`;

const Icons1 = styled.div`
  color: #673ab7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  border-color: #673ab7;
  background: #673ab7;
  text-align: center;
  height: 39px;
  width: 100%;
  &.invalid {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default function Signup(props) {
  const context = useContext(LoginContext);
  const submitRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [validPassword, setValidPassowrd] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validFirst, setValidFirst] = useState(true);
  const [validLast, setValidLast] = useState(true);
  const [validUser, setValidUser] = useState(true);

  const signupHandller = (e) => {
    // e.preventDefault();
    context.signup(username, password, firstname, lastname, Email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (password.length < 8) {
      setValidPassowrd(false);
    } else {
      setValidPassowrd(true);
    }
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (username.length == 0) {
      setValidUser(false);
    } else {
      setValidUser(true);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (Email.length == 0) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };
  const handleFirstName = (e) => {
    setFirstname(e.target.value);
    if (firstname.length == 0) {
      setValidFirst(false);
    } else {
      setValidFirst(true);
    }
  };
  const handleLastName = (e) => {
    setLastname(e.target.value);
    if (lastname.length == 0) {
      setValidLast(false);
    } else {
      setValidLast(true);
    }
  };

  return (
    <>
      <Parent1>
        <Image1>
          <img />
        </Image1>
        <Child1>
          <Text1>Welcome to iSupport</Text1>

          {/* <Card.Body> */}
          <form onSubmit={signupHandller}>
            <FormStyle1>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="FirstName"
                  placeholder="First Name"
                  onChange={(e) => handleFirstName(e)}
                  value={firstname}
                  aria-describedby="basic-addon1"
                />

                <Form.Control
                  aria-label="LastName"
                  onChange={(e) => handleLastName(e)}
                  value={lastname}
                  placeholder="Last Name"
                  style={{ marginLeft: "2%" }}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">username</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => handleUsername(e)}
                  value={username}
                  placeholder="User Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">Email</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => handleEmail(e)}
                  value={Email}
                  placeholder="Email"
                  type="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">password</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => handlePassword(e)}
                  value={password}
                  placeholder="Password"
                  type="password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </FormStyle1>

            <StyledButton
              type="submit"
              className={
                validPassword &&
                validEmail &&
                validFirst &&
                validLast &&
                validUser
                  ? ""
                  : "invalid"
              }
            >
              Sign up
            </StyledButton>

            <p
              style={{
                textAlign: "center",
                color: "gray",
                borderBottom: "1px solid #000",
                lineHeight: "0.1em",
                margin: "10px 0 20px",
                marginTop: "20px",
              }}
            >
              {" "}
              <span
                style={{
                  background: "#fff",
                  padding: "0 10px",
                  fontSize: "13px",
                }}
              >
                Or continue with
              </span>
            </p>

            <Icons1>
              <a>
                <AiFillGoogleCircle style={{ fontSize: "34px" }} />
              </a>
              <a>
                <FaFacebook style={{ fontSize: "30px" }} />
              </a>
            </Icons1>
          </form>

          <Button
            variant="link"
            style={{
              fontSize: "10px",
              color: "#673ab7",
              width: "100%",
              textAlign: "center",
              marginTop: "10px",
            }}
            onClick={props.toggleShow}
          >
            If you have an account,{" "}
            <span style={{ fontWeight: "bold" }}>Click here</span>
          </Button>
          {/* </Card.Body> */}
        </Child1>
      </Parent1>
    </>
  );
}
