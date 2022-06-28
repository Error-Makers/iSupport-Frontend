import React from 'react';
import styled from 'styled-components';
import { device } from '../../../media';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(https://images2.imgbox.com/ad/87/PklpBVH6_o.png);
  background-position: 20%;
  background-size: cover;
  @media ${device.tablet} {
    background-position: 50%;
  }
`;

const MainHeading = styled.h1`
  font-size: 40px;
  width: 100%;
  text-align: left;
  font-weight: bold;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  @media ${device.tablet} {
    width: 50%;
  }
`;

const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #707070;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const HeroButton = styled.button`
  background-color: var(--Accent-Main);
  padding: 14px 30px;
  border-radius: 15px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  &:active,
  &:hover {
    opacity: 0.7;
  }
`;

const Hero = () => {
  return (
    <Wrapper name="hero">
      <Container>
        <MainHeading>Build Habits, Unlock your Potential</MainHeading>
        <HeroText>
          Build the best version of yourself by mastering your habits
        </HeroText>
        <ButtonWrapper>
          <HeroButton>Get Started</HeroButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Hero;
