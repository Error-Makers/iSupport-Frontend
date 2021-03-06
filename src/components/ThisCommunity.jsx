import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { device } from "../media";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/auth/main";
import { useParams } from "react-router-dom";

const Card = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -100px;
  padding: 20px;
  z-index: 5;
  border-radius: 5px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  background-color: #ffff;
  gap: 30px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  gap: 20px;
`;
const CardTitle = styled.h3`
  color: var(--Primary-Main);
  font-weight: 700;
`;
const CardText = styled.div`
  color: var(--Text-Primary);
  font-weight: 600;
  font-size: 16px;
`;
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  z-index: 0;
  position: relative;

  @media ${device.tablet} {
    width: 70%;
  }
`;

const JoinButton = styled.button`
  margin-top: auto;
  background-color: var(--Accent-Main);
  min-width: 20%;
  max-width: 50%;
  padding: 5px 20px;
  border-radius: 15px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  position: absolute;
  bottom: 5px;
  right: 5px;
  &:active,
  &:hover {
    opacity: 0.7;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 150px;
  width: 150px;
  z-index: 1;
`;

const images = [
  "https://cdn.discordapp.com/attachments/961538796887887896/991755817130938378/a0001052_parts_58d8d83188b7a.jpg",
  "https://cdn.discordapp.com/attachments/961538796887887896/991755846658818149/acrylic-painting-ideas-thumbnail.jpg",
  "https://cdn.discordapp.com/attachments/961538796887887896/991756137185693797/yoga-gettyimages-1142820079-promo.jpg",
  "https://cdn.discordapp.com/attachments/961538796887887896/991757521675100230/books_1200-1.jpg",
];

const ThisCommunity = (props) => {
  let { communityId } = useParams();
  const API = process.env.REACT_APP_SERVER;
  let context = useContext(LoginContext);
  const token = context.user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [showJoin, setShowJoin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let posts = await axios.get(
        `${API}posts/community/${communityId}`,
        config
      );
      let users = posts.data.map((ele) => ele.author_name);
      users.indexOf(context.user.username) >= 0
        ? setShowJoin(false)
        : setShowJoin(true);
    };
    fetchData(context.user.username);
  }, []);
  const handleJoin = async () => {
    let body = {
      post_title: "New User",
      post_body: `${context.user.username} has joined the community`,
    };
    await axios.post(
      `${API}community/${communityId}/create-post`,
      body,
      config
    );
    setShowJoin(false);
  };
  return (
    <Wrapper>
      <Card>
        <Image src={images[communityId - 1]} />
        <CardBody>
          <CardTitle>{props.data.community_name}</CardTitle>
          <CardText>{props.data.community_desc}</CardText>
        </CardBody>
        {showJoin && (
          <JoinButton onClick={handleJoin}>
            Join {props.data.community_name}
          </JoinButton>
        )}
      </Card>
    </Wrapper>
  );
};

export default ThisCommunity;
