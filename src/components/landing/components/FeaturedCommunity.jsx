import React from 'react';
import styled from 'styled-components';
import { device } from '../../../media';

import Asset7 from '../assets/Asset7.png';
import Asset8 from '../assets/Asset8.png';
import mask from '../assets/mask.png';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100%;
  padding: 40px 20px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  gap: 30px;
`;

const TopTitle = styled.h2`
  text-align: center;
  font-size: 45px;
  margin: auto;
  font-weight: 700;
  color: var(--Primary-Dark);
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    width: 90%;
    flex-direction: row;
    gap: 120px;
  }
`;

const TopImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 25%;
`;
const TopName = styled.span`
  font-weight: 600;
  font-size: 30px;
  text-align: left;
  color: var(--Accent-Dark);
`;
const TopText = styled.span`
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  color: var(--Accent-Main);
`;

const TopButton = styled.button`
  background-color: var(--Secondary-Main);
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
  return (
    <Wrapper>
      <img
        src={mask}
        alt='xd'
        style={{
          position: 'absolute',
          overflow: 'hidden',
          left: '-200px',
          top: '-50px',
          height: '1100px',
          width: '2500px',
          zIndex: '-1',
        }}
      />
      <Container>
        <TopTitle>Top Communities</TopTitle>
        <TopWrapper>
          <TopDiv>
            <TopImage src={Asset7} alt='a' />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TopName>Origami</TopName>
              <TopText>15k+ Members</TopText>
            </div>
          </TopDiv>
          <ButtonWrapper>
            <TopButton>Explore All Communities</TopButton>
          </ButtonWrapper>
          <TopDiv>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TopName>Hiking</TopName>
              <TopText>15k+ Members</TopText>
            </div>
            <TopImage src={Asset8} alt='a' />
          </TopDiv>
        </TopWrapper>
      </Container>
    </Wrapper>
  );
};

export default TopdCommunity;
