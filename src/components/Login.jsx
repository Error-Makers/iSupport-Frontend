import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../context/auth/main";
import styled from "styled-components";
import unlock from "../assets/unlock.png";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Parent = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Child = styled.div`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
`;

const Img = styled.img`
  height: 20%;
  width: 48%;
`;
const Text = styled.h1`
  font-size: 1.5em;
  color: var(--Primary-Main);
  padding: 10px;
  text-align: center;
`;

const Anchor = styled.a`
  text-align: left;
  font-size: 10px;
  color: #424242;
`;
export default function Login(props) {
  let navigate = useNavigate();
  const context = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (context.loggedIn) navigate("/browse");
  }, [context.loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    context.login(username, password);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <BsFillArrowLeftCircleFill />
      </Button>
      <Parent>
        <Child>
          <Card
            style={{
              width: "150%",
              height: "70%",
              borderColor: "#673AB7",
              borderRadius: "40px",
            }}
          >
            <Card.Body>
              <Form onSubmit={handleLogin}>
                <Text>login </Text>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ width: "90%" }}>
                    <br></br>
                    <Form.Control
                      style={{}}
                      onChange={handleChange}
                      placeholder="username"
                      value={username}
                      type="text"
                      name="username"
                    />
                  </Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ width: "90%" }}>
                    <Form.Control
                      style={{}}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="password"
                      type="password"
                      name="password"
                    />
                  </Form.Label>
                </Form.Group>
                <br />

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
                  Login
                </Button>
              </Form>
              <Anchor onClick={props.toggleShow}>
                If you don't have account, Click here
              </Anchor>
            </Card.Body>
          </Card>
        </Child>
        <Child>
          <Img src={unlock} />
        </Child>
      </Parent>
    </>
  );
}
