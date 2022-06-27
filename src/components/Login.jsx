import { useContext, useState } from "react";
import { AuthContect } from "../context/auth/main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";

const Parent = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`;
const Child = styled.div`
  
  background-color: #fff;
  
  
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
  // background: url("https://user-images.githubusercontent.com/75664971/175835664-d12571e6-6099-450c-b325-967728e09b91.png")
  //   no-repeat fixed right;

    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('https://user-images.githubusercontent.com/75664971/175835664-d12571e6-6099-450c-b325-967728e09b91.png');
  
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
`;

export default function Login(props) {
  const context = useContext(AuthContect);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    context.login(username, password);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  let navigate = useNavigate();

  return (
    <>
      {/* <BsFillArrowLeftCircleFill  onClick={() => navigate(-1)} style={{ fontSize: "30px" ,color: "#673AB7",marginLeft:'3%',position:'absolute',marginTop:'3%'}} /> */}

      <Parent>
        <Image>
          <img />
        </Image>

        <Child>
        <Text>Welcome Back </Text>
          <form onSubmit={handleLogin}>
           
           

            <FormStyle>
              
            


            <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">username</InputGroup.Text> */}
                <Form.Control
                   onChange={handleChange}
                   value={username}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                 
                />
              </InputGroup>

              {/* <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChange}
                  placeholder="username"
                  value={username}
                  type="text"
                  name="username"
                />
              </InputGroup> */}

              

              <InputGroup className="mb-3">
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="password"
                  type="password"
                  name="password"
                />
              </InputGroup>
            </FormStyle>

            <Button
              type="submit"
              style={{
                borderColor: "#673AB7",
                background: "#673AB7",
                textAlign: "center",
                height: "39px",
                width: "100%",
              }}
            >
              Sign in
            </Button>

            {/* <p style={{textAlign: 'center',marginTop:'2%',marginLeft:'5%',color:'gray'}}>OR</p> */}

            {/* <Button
              type="submit"
              style={{
                backgroundColor: "transparent",
                borderColor: "#673AB7", 
                textAlign: 'center',
                height: "39px",
                width: "60%",
               
                color:'#673AB7',
               
              }}
            >
            <FaGoogle/> Sign in with google 
            </Button>

            <Button
              type="submit"
              style={{
                backgroundColor: "transparent",
                borderColor: "#673AB7", 
                textAlign: 'center',
                height: "39px",
                width: "60%",
                marginLeft:'24%',
                color:'#673AB7',
               marginTop:'1%'
              }}
            >
             <FaFacebookF/> Sign in with facebook
            </Button> */}

            <Button
              variant="link"
              style={{
                fontSize: "10px",
                color: "#673AB7",
                textAlign: "center",
                marginTop: "2%",
              }}
              onClick={props.toggleShow}
            >
              Don't have an account,{" "}
              <spab style={{ fontWeight: "bold" }}>Click here</spab>
            </Button>
          </form>
        </Child>
      </Parent>
    </>
  );
}
