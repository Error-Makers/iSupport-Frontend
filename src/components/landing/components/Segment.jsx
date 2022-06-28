import React from "react";
import styled from "styled-components";
import { device } from "../../../media";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(https://wallpaperaccess.com/full/42271.jpg);
  background-position: 20%;
  background-size: cover;
  margin: 0;
  @media ${device.tablet} {
    background-position: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const Text = styled.h1`
  color: white;
  font-weight: 700;
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
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Text>Begin Your Journey</Text>
        <ButtonWrapper>
          <HeroButton
            onClick={() => {
              navigate("/auth");
            }}
          >
            Sign Up
          </HeroButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Segment;
