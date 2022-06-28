import React from 'react';
import styled from 'styled-components';
import { device } from '../../../media';

import Asset11 from '../assets/Asset11.png';
import Asset4 from '../assets/Asset4.png';
import Asset10 from '../assets/Asset10.png';

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 20px;
  display: flex;
  background-color: #edf7f9;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 50px;
`;

const FeatureTitle = styled.h2`
  text-align: center;
  font-size: 37px;
  margin: 40px auto;
  font-weight: 700;
  color: var(--Primary-Dark);
`;

const FeatureWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  margin: 0 auto;
  gap: 4rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const FeatureDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  width: 100%;
  @media ${device.tablet} {
    width: 30%;
  }
`;

const FeatureImage = styled.img`
  width: 250px;
  height: 200px;
  margin: auto;
`;
const FeatureName = styled.span`
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: var(--Accent-Dark);
`;
const FeatureText = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 5 00;
`;

const Features = () => {
  return (
    <Wrapper name='features'>
      <Container>
        <FeatureTitle>Features</FeatureTitle>
        <FeatureWrapper>
          <FeatureDiv>
            <FeatureImage src={Asset11} alt='a' />
            <FeatureName>Communities</FeatureName>
            <FeatureText>
              connect, support, and compete with others.
            </FeatureText>
          </FeatureDiv>
          <FeatureDiv>
            <FeatureImage src={Asset10} alt='a' />
            <FeatureName>Chat</FeatureName>
            <FeatureText>
              Share precious moments with community members.
            </FeatureText>
          </FeatureDiv>
          <FeatureDiv>
            <FeatureImage src={Asset4} alt='a' />
            <FeatureName>Personal Progress</FeatureName>
            <FeatureText>
              Track your progress and achive your goals.
            </FeatureText>
          </FeatureDiv>
        </FeatureWrapper>
      </Container>
    </Wrapper>
  );
};

export default Features;
