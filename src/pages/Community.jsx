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
import { useContext, useState, useEffect } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { LoginContext } from "../context/auth/main";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdfbff;
`;

const HeadPic = styled.div`
  height: 33vh;
  width: 100%;
  margin-bottom: auto;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  background-size: 300% 300%;
  animation: AnimateBG 10s ease infinite;
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
  const API = process.env.REACT_APP_SERVER;
  const context = useContext(LoginContext);
  const config = {
    headers: { Authorization: `Bearer ${context.user.token}` },
  };

  let { communityId } = useParams();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`${API}community/${communityId}`, config);
      setData(response.data);
    };
    fetchData();
  });

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
          <HeadPic data={data} />
          <ThisCommunity data={data} />
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
