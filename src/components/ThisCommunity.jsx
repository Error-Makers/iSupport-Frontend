import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { device } from "../media";

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

let community = {
  community_id: 1,
  community_name: "Football",
  aboutTheCommunity:
    "The football community. News, results and discussion about the beautiful game.",
  url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
  createdAt: "2022-06-21T08:37:41.318Z",
};

const ThisCommunity = (props) => {
  return (
    <Wrapper>
      <Card>
        <Image src={community.url} />
        <CardBody>
          <CardTitle>{props.data.community_name}</CardTitle>
          <CardText>{props.data.community_desc}</CardText>
        </CardBody>
        {/* <JoinButton>Join {community.community_name}</JoinButton> */}
      </Card>
    </Wrapper>
  );
};

export default ThisCommunity;
