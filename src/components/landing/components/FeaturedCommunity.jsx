import React from "react";
import styled from "styled-components";
import { device } from "../../../media";

import Asset7 from "../assets/Asset7.png";
import Asset8 from "../assets/Asset8.png";
import mask from "../assets/mask.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: var(--Primary-Dark);
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  gap: 50px;
`;

const TopTitle = styled.h2`
  text-align: center;
  font-size: 45px;
  margin: auto;
  font-weight: 700;
  color: white;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  @media ${device.tablet} {
    width: 90%;
    flex-direction: row;
    gap: 40px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const TopImage = styled.img`
  width: 220px;
  height: 300px;
  border-radius: 10px;
`;
const TopName = styled.span`
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: white;
`;
const TopText = styled.span`
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  color: var(--Accent-Main);
`;

const TopButton = styled.button`
  background-color: var(--Accent-Main);
  padding: 14px 30px;
  border-radius: 30px;
  border-style: none;
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const TopdCommunity = () => {
  const navigate = useNavigate();

  return (
    <Wrapper name="discover">
      {/* <img
        src={mask}
        alt="xd"
        style={{
          position: "absolute",
          overflow: "hidden",
          left: "-200px",
          top: "-50px",
          height: "1100px",
          width: "2500px",
          zIndex: "-1",
        }}
      /> */}
      <Container>
        <TopTitle>Popular Communities</TopTitle>
        <TopWrapper>
          <TopDiv>
            <TopImage
              src="https://images.unsplash.com/photo-1558244402-286dd748c593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="a"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TopName>Origami</TopName>
              <TopText>5k+ Members</TopText>
            </div>
          </TopDiv>
          <TopDiv>
            <TopImage
              src="https://images.unsplash.com/photo-1631635490744-229e551afade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="a"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TopName>Hiking</TopName>
              <TopText>10k+ Members</TopText>
            </div>
          </TopDiv>
          <TopDiv>
            <TopImage
              src="https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80"
              alt="a"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TopName>Movies</TopName>
              <TopText>15k+ Members</TopText>
            </div>
          </TopDiv>
        </TopWrapper>
        <ButtonWrapper>
          <TopButton
            onClick={() => {
              navigate("/auth");
            }}
          >
            Explore All Communities
          </TopButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default TopdCommunity;





