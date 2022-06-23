import styled from "styled-components";
import banner from "../assets/404.png";

const Section = styled.section`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 321.25px;
  height: 222.82px;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 4vw;
  border-left: 4px solid rgba(0, 0, 0, 0.1);
`;

const ContainerHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 112px;
  line-height: 112px;
  text-align: center;
  color: #00bcd4;
`;

const Alert = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: rgba(0, 0, 0, 0.87);
`;

const Content = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: rgba(0, 0, 0, 0.54);
  width: 60vw;
`;

const Button = styled.button`
  background-color: #673ab7;
  border-radius: 20px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem;
  color: #ffffff;
  &:active,
  &:hover {
    opacity: 0.7;
  }
`;

const NotFoundMain = () => {
  return (
    <Section>
      <Image src={banner} />
      <Container>
        <ContainerHeading>404</ContainerHeading>
        <Alert>This page could not be found</Alert>
        <Content>
          You can either stay and chill here, or go back to the beginning.
        </Content>
        <Button>Back to Home</Button>
      </Container>
    </Section>
  );
};

export default NotFoundMain;
