import React from 'react';
import aboutUs from '../About/AboutUs.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import Header from '../components/landing/components/NavBar';
import Footer from '../components/Footer';
import goodTeam from '../components/landing/assets/aboutus.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding-top: 150px;
  gap: 50px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
`;
const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  gap: 50px;
  padding: 100px 0;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding-left: 50px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  gap: 25px;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 2px 2px var(--Accent-Light);
`;
const CardImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: 'cover';
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  &:hover {
  }
`;
const CardName = styled.p`
  margin-top: 20px;
  font-size: 1.4em;
  color: var(--Primary-Dark);
  font-weight: 500;
  text-align: center;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
`;

const SocialIcon = styled.div`
  display: flex;
  color: white;
`;

const HeroImg = styled.img`
  width: 80%;
`;

const Major = styled.p`
  font-size: 1.1em;
  color: var(--Accent-Dark);
  font-weight: 500;
  text-align: center;
`;

const Title = styled.h1`
  color: var(--Accent-Light);
  text-align: left;
  font-weight: bold;
  font-size: 50px;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 26px;
  color: var(--Primary-Dark);
  text-align: left;
`;
const AboutUs = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Left>
          <div style={{ margin: 'auto' }}>
            <Title>About Us</Title>
            <P>
              We're a team of makers, thinkers, and explorers. <br /> We
              approach work and play with curiosity and enthusiasm, to create
              beautiful and meaningful digital products that connect with
              people, just like you.
            </P>
          </div>
        </Left>
        <Right>
          <HeroImg src={goodTeam} alt='img' />
        </Right>
      </Container>
      <Container2>
        <Title>Meet The Team</Title>
        <Cards>
          {aboutUs.map((item, idx) => {
            return (
              <Card key={idx}>
                <CardImage src={item.imgUrl} alt={item.name} />
                <CardName> {item.name}</CardName>
                <Major>{item.title}</Major>
                <SocialIcons>
                  <SocialIcon>
                    <a href={item.github}>
                      <FaGithub color='303030' size={'35px'} />
                    </a>
                  </SocialIcon>
                  <SocialIcon>
                    <a href={item.linkedIn}>
                      <FaLinkedin color='55ACEE' size={'35px'} />
                    </a>
                  </SocialIcon>
                </SocialIcons>
              </Card>
            );
          })}
        </Cards>
      </Container2>
      <Footer />
    </Wrapper>
  );
};

export default AboutUs;
