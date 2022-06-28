import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import Posts from "../components/Posts";
import PersonalProgress from "../components/PersonalProgress";
import Footer from "../components/Footer";
import CommunityChat from "../components/CommunityChat";
import styled from "styled-components";
import { device } from "../media";
import Auth from "../context/auth/auth";
import ThisCommunity from "../components/ThisCommunity";
import HeaderBar from "../components/Header";
import { useState } from "react";
import { BsFillChatFill } from "react-icons/bs";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdfbff;
`;

const HeadPic = styled.div`
  height: 33vh;
  width: 100%;
  background-size: cover;
  background-position-y: 80%;
  background-image: url(https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
`;

const CommunityGrid = styled.div`
  margin: 5vh auto;
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 50px;
  align-items: center;
  @media ${device.tablet} {
    width: 70%;
    margin: 15vh auto 0 auto;
    grid-row-gap: 30px;
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

const Chat = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--Primary-Main);
  position: fixed;
  border-radius: 50%;
  bottom: 5vh;
  right: 5vw;
  cursor: pointer;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Logo = styled(BsFillChatFill)`
  color: var(--Paper-Light);
  height: 35px;
  width: 35px;
`;

const Community = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Wrapper>
        <HeaderBar />
        <Auth>
          <Chat onClick={handleShow}>
            <Logo />
          </Chat>
          <CommunityChat
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
          <HeadPic />
          <ThisCommunity />
          <CommunityGrid>
            <Top>
              <PersonalProgress />
              <Leaderboard />
            </Top>
            <Middle>
              <Posts />
            </Middle>
          </CommunityGrid>
        </Auth>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Community;
