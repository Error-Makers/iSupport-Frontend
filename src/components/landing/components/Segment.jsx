import React from 'react';
import styled from 'styled-components';
import { device } from '../../../media';

const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  background-image: url(https://wallpaperaccess.com/full/42271.jpg);
  background-position: 20%;
  background-size: cover;
  @media ${device.tablet} {
    background-position: 50%;
  }
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

const ButtonWrapper = styled.div`
  padding-top: 180px;
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
    scale: 5;
  }
`;

const Segment = () => {
  return (
    <Wrapper>
      <Container>
        <ButtonWrapper>
          <HeroButton>Get Started</HeroButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Segment;
