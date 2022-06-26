import Header from '../components/Header';
import Leaderboard from '../components/Leaderboard';
import Posts from '../components/Posts';
import PersonalProgress from '../components/PersonalProgress';
import Footer from '../components/Footer';
import CommunityChat from '../components/CommunityChat';
import styled from 'styled-components';
import { device } from '../media';
import ThisCommunity from '../components/ThisCommunity';

const Wrapper = styled.div`
  width: 100%;
`;
const CommunityGrid = styled.div`
  margin: 5vh auto;
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 5vh;
  align-items: center;
  @media ${device.tablet} {
    width: 70%;
    margin: 15vh auto;
    grid-row-gap: 12vh;
  }
`;
const Top = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
  width: 100%;
  margin: 0 auto;
  align-items: center;
  gap: 40px;
`;
const Bottom = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Community = () => {
  return (
    <Wrapper>
      <Header />
      <CommunityGrid>
        <ThisCommunity />
        <Top>
          <PersonalProgress />
          <Leaderboard />
        </Top>
        <Middle>
          <Posts />
        </Middle>
        <Bottom>
          <CommunityChat />
        </Bottom>
      </CommunityGrid>
      <Footer />
    </Wrapper>
  );
};

export default Community;
