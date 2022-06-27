import { useContext, useState } from "react";
// import { When } from "react-if";
// import Login from "./Login";
import { AuthContect } from "../context/auth/main";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { FaGoogle,FaFacebookF } from "react-icons/fa"; 



export default function Signup(props) {
  const context = useContext(AuthContect);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  // const [role, setRole] = useState("");

  const signupHandller = (e) => {
    e.preventDefault();
    context.signup(username, password, firstname, lastname, Email);
  };

  const Parent = styled.div`
    width: 100%;
    height: 100%;
    display: table;
  `;
  const Child = styled.div`
    
    
    background-color: #fff;
    // padding: 70px 20px 10px 70px;
    width: 35%;
    display: table-cell;
    padding: 0 30px;
     display :flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 100%;
    
  `;

  const Image = styled.div`
    // background: url("https://user-images.githubusercontent.com/75664971/175835750-ea519f51-9753-4e1f-b75c-85035ca2d89f.png") no-repeat fixed right;
    

    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('https://user-images.githubusercontent.com/75664971/175835750-ea519f51-9753-4e1f-b75c-85035ca2d89f.png');

      // background: linear-gradient(to right,#673ab7,#e91e63) no-repeat fixed right;
    object-fit: cover;
    background-size: 100%;
    width: 65%;
    
    display: table-cell;
    hight: 100%;
  `;

  const Text = styled.h1`
  font-size: 1.5em;
  // color:#e91e63;
  color: var(--Primary-Main);
  text-align: center;
  font-weight: bold;
  
  
`;

const FormStyle = styled.div`
width: 100%;
color:#673ab7;



`

  return (
    <>
      <Parent>
      <Image>
          <img />
        </Image>
        <Child>
          <Text>Welcome To iSupport</Text>

          {/* <Card.Body> */}
            <form onSubmit={signupHandller} >
              <FormStyle>
             
              <InputGroup className="mb-3">
              
                <Form.Control
                  aria-label="First name"
                  placeholder="Firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  aria-describedby="basic-addon1"
                />

                <Form.Control
                  aria-label="Last name"
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Lastname"
                  style={{marginLeft:'2%'}}
                />
              </InputGroup>

              

             
             
              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">username</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

            
             
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

              </FormStyle>

           

              <Button
                type="submit"
                style={{
                  borderColor: "#673ab7",
                  background: "#673ab7",
                  textAlign: "center",
                  height: "39px",
                  width: "100%",
                 
                 
                }}
              >
                Sign up
              </Button>

              {/* <p
                style={{
                  textAlign: "center",
                 marginTop:'2%',
               
                  color: "gray",
                }}
              >
                OR
              </p> */}

              {/* <Button
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  textAlign: "center",
                 
                  width: "100%",
                  
                  color: "#673AB7",
                }}
              >
                <FaGoogle /> 
              </Button>

              <Button
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  textAlign: "center",
                 
                  width: "100%",
                  
                  color: "#673AB7",
                }}
              >
                 <FaFacebookF />
              </Button> */}

              {/* <Button
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#673AB7",
                  textAlign: "center",
                  height: "39px",
                  width: "60%",
                  marginLeft: "24%",
                  color: "#673AB7",
                  marginTop: "1%",
                }}
              >
                <FaFacebookF /> Sign up with facebook
              </Button> */}
            </form>

            <Button
              variant="link"
              style={{
                fontSize: "10px",
                color:'#673ab7',
                width: "100%",
                textAlign: "center",
                marginTop:'10px',
                
                
              }}
              onClick={props.toggleShow}
            >
              If you have an account,{" "}
              <span style={{ fontWeight: "bold" }}>Click here</span>
            </Button>
          {/* </Card.Body> */}
        </Child>

      
      </Parent>
    </>
  );
}
