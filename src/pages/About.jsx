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
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 2px solid #272133;
  margin-top: 20px;
  margin-left: 25%;
 
  box-shadow: 0 5px 10px var(--Accent-Light);

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
    top: 0.95em;
    left: 0.96em;
    transition: all 265ms ease-out;
  }
`;
const SocialLi = styled.li`
display: inline-block;
margin: 0.1em;
position: relative;
font-size: 1em;
hight:5em

&:hover{
  font-size: 2em;
  color:var(--Accent-Light)
}
`;
const HeroImg = styled.img`
  height: 40%;
  width: 55%;
  margin-left:35%;
  margin-top: 10px;
`;

const Major = styled.p`
  margin-top: 10px;
  font-size: 1em;
  color: var(--Text-Primary);
  text-align: center;
`;
const Title = styled.h1`
  color: var(--Accent-Light);
  text-align: center;
  font-family: Open Sans, sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div style={{width:'100%',height:'40%'}}>
        
        <h1 style={{zIndex:'1',marginTop:'15%',position:'absolute',left:'5%',fontWeight:'bold',color:'#673ab7'}}>
            About Our Team
            </h1>
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
                  border: "1px solid #673ab7",
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
                        <a href={item.github} className="btn">
                          <FaGithub>
                            <i class="fab fa-github"></i>
                          </FaGithub>{" "}
                        </a>
                      </SocialLi>
                      <SocialLi>
                        {" "}
                        <a href={item.linkedIn} className="btn">
                          <FaLinkedin>
                            <i class="fab fa-github"></i>{" "}
                          </FaLinkedin>{" "}
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
