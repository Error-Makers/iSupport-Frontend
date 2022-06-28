import React from "react";
import aboutUs from "../About/AboutUs.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import goodTeam from "../assets/team2.jpg";

const Cards = styled.div`
  margin: auto;
  align-items: center;
  justify-content: center;
`;
const Card1 = styled.div`
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  // color: var(--Primary-Dark);
  margin-left: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;
const CardImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: "cover";
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  // box-shadow: 0 5px 10px var(--Accent-Light);

  &:hover {
  }
`;
const CardName = styled.p`
  margin-top: 20px;
  font-size: 1.5em;
  color: var(--Text-Primary);
  text-align: center;
`;
const SocialIcons = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0em;
  text-align: center;

  i {
    color: #fff;
    position: absolute;
    transition: all 265ms ease-out;
  }
`;
const SocialLi = styled.li`
display: inline-block;
margin: 0.1em;
position: relative;
font-size: 1em;


&:hover{

}
`;
const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
`;
const HeroImg = styled.img`
  height: 40%;
  width: 55%;
  // margin-left: 35%;
  // margin-top: 10px;
`;

const Major = styled.p`
  // margin-top: 10px;
  font-size: 1em;
  color: var(--Text-Primary);
  text-align: center;
`;
const Button = styled.button`
z-index: 1;
// margin-top: 27%;
// position: absolute;
// left: 5%;
width: 20%;
font-weight: bold;
background: #673ab7;
color:white;
border-radius:20px;
padding:5px
`;
const Title = styled.h1`
  color: var(--Accent-Light);
  text-align: center;
  font-family: Open Sans, sans-serif;
  // margin-top: 20px;
  // margin-bottom: 20px;
`;
const P = styled.p`
  z-index: 1;
  // margin-top: 17%;
  // position: absolute;
  // left: 5%;
  // width: 30%;
  font-weight: bold;
  color: #673ab7;

`;
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "auto",display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <div style={{width:'30%'}}>
        <h1
          style={{
            zIndex: "1",
            fontWeight: "bold",
            color: "#673ab7",
          }}
        >
          About Our Team
        </h1>
        <P style={{}}>
          We're a team of makers, thinkers, and explorers. We approach work and
          play with curiosity and experimentation, using what we learn to create
          meaningful digital products that connect with people, just like you.
        </P>
        <Button>Login</Button>
        </div>
        <HeroImg src={goodTeam} alt="img" />
      </div>
      <Title>Meet our Team </Title>

      <Cards>
        <Card1>
          {aboutUs.map((item, idx) => {
            return (
              <Card
                style={{
                  width: "20rem",
                  marginLeft: "20px",
                  marginBottom: "20px",
                  borderRadius: "20px",
                  boxShadow: "0 2px 5px var(--Accent-Light)",
                }}
                key={idx}
              >
                <div>
                  <CardImage src={item.imgUrl} alt={item.name} />
                  <CardName> {item.name}</CardName>
                  <Major>{item.title}</Major>
                  <div>
                    <SocialIcons>
                      <SocialLi>
                     
                        <a href={item.github} className="">
                        <SocialIcon color='303030'>
                          <FaGithub>
                            <i class="fab fa-github"></i>
                          </FaGithub>{" "}
                          </SocialIcon>
                        </a>
                      </SocialLi>
                      <SocialLi>
                        {" "}
                        <a href={item.linkedIn} className="">
                        <SocialIcon color='55ACEE'>
                          <FaLinkedin>
                            <i class="fab fa-github"></i>{" "}
                          </FaLinkedin>{" "}
                          </SocialIcon>
                        </a>
                      </SocialLi>
                    </SocialIcons>
                  </div>
                </div>
              </Card>
            );
          })}
        </Card1>
      </Cards>
      <Footer />
    </div>
  );
};

export default AboutUs;
