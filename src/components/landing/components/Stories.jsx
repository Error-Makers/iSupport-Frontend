import React from 'react';
import styled from 'styled-components';
import { device } from '../../../media';

const Wrapper = styled.div`
  width: 100%;
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f7f8;
  gap: 50px;
  min-height: 82vh;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media ${device.tablet} {
    width: 50%;
    gap: 0px;
    flex-direction: row;
  }
`;
const SubContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  padding: 0 10px;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
    padding: 0 50px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 350px;
  /* background-color: rgba(103, 58, 183, 1); */
  background-image: linear-gradient(
    to bottom,
    rgba(183, 58, 181, 0.2),
    rgba(19, 11, 55, 1)
  );
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 2px black;
  border-radius: 10px;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  margin: 0 auto;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translate3d(-40px, -40px, 0px);
    transition: 0.4s ease-out;
  }
  @media ${device.tablet} {
    margin-left: -50px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 45px;
  margin: auto;
  font-weight: 700;
  color: var(--Primary-Dark);
`;

const Bold = styled.p`
  width: 100%;
  font-size: 42px;
  font-weight: bold;
  color: var(--Primary-Dark);
  text-align: center;
  @media ${device.tablet} {
    width: 33%;
    text-align: Left;
  }
`;

const TextWrapper = styled.span`
  font-weight: 600;
  padding: 5px 10px;
  text-align: left;
  color: #fefefe;
  font-size: 0.9rem;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 66%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: 0 15%;
`;

const data = [
  {
    title: 'Jane Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Jane Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    image:
      'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Jane Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    image:
      'https://images.unsplash.com/photo-1619016984954-70f7f40d1f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const Stories = () => {
  return (
    <Wrapper name='stories'>
      <Title>Stories</Title>
      <SubContainer>
        <Bold>Join others and write your own story</Bold>
        <Container>
          {data.map((el, index) => (
            <Card key={index}>
              <CarouselImage src={el.image} />
              <TextWrapper>{el.title}</TextWrapper>
              <TextWrapper>{el.description}</TextWrapper>
            </Card>
          ))}
        </Container>
      </SubContainer>
    </Wrapper>
  );
};

export default Stories;
