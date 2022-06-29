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
import mask2 from "../assets/mask2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
    min-height: 400px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: auto;
  z-index: 2;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: left;
  color: var(--Primary-Main);
`;

const Desc = styled.p`
  margin: 20px 0px;
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
  margin-top: auto;
  z-index: 2;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: var(--Primary-Main);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: auto;
  min-height: 273px;
  z-index: 2;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <img
        src={mask2}
        alt="xd"
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-200px",
          height: "500px",
          width: "2000px",
          zIndex: "1",
        }}
      />
      <Left>
        <Logo>
          <img src={logo} alt="iSupport" width="45" height="33"></img> iSupport
        </Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
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
          <ListItem>FAQ</ListItem>
          <ListItem>Support Center</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} /> Amman , Jordan
        </ContactItem>
        <ContactItem>
          <FaPhone style={{ marginRight: "10px" }} /> +962 799999999
        </ContactItem>
        <ContactItem>
          <IoMailOutline style={{ marginRight: "10px" }} /> contact@iSupport.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
