import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import styled from "styled-components";
import { device } from "../media";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #01002e;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px 20px 0 20px;
  @media ${device.tablet} {
    flex-direction: row;
    min-height: 45vh;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

const Footer2 = () => {
  let navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Left>
          <Logo>
            <img src={logo} alt="iSupport" width="45" height="33"></img>{" "}
            iSupport
          </Logo>
          <Desc>
            At Isupport, we bring together groups of people who share the same
            interests and habits in order to provide support to one another in
            the same community.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <FaPinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Sign Up</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Title>
          <ContactItem>
            <FaMapMarkerAlt style={{ marginRight: "10px" }} /> Ammn , Jordan
          </ContactItem>
          <ContactItem>
            <FaPhone style={{ marginRight: "10px" }} /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <IoMailOutline style={{ marginRight: "10px" }} />{" "}
            contact@iSupport.com
          </ContactItem>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer2;
