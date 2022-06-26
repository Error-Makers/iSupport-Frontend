import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { device } from '../media';

const Card = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 40px;
  text-align: left;
  gap: 20px;
`;
const CardTitle = styled.h4`
  color: var(--Primary-Main);
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
`;
const Container = styled.div`
  @media ${device.tablet} {
    border-radius: 25px;
    box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  }
  padding: 30px;
`;

const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  height: 150px;
  width: 150px;
  z-index: 1;
`;

let community = {
  community_id: 1,
  community_name: 'Football',
  aboutTheCommunity:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga',
  url: 'https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg',
  createdAt: '2022-06-21T08:37:41.318Z',
};

const ThisCommunity = () => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <Image src={community.url} />
          <CardBody>
            <CardTitle>{community.community_name}</CardTitle>
            <CardText>{community.aboutTheCommunity}</CardText>
          </CardBody>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default ThisCommunity;
