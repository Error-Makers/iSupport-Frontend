import React from 'react';
import styled from 'styled-components';
import { device } from '../media';

const Container = styled.div`
  height: 60px;

  background-color: aliceblue;
  @media ${device.mobileL} {
    height: '50px';
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media ${device.mobileL} {
    padding: '10px 0px';
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav``;
const Logo = styled.div``;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.mobileL} {
    flex: 2;
    justify-content: center;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo></Logo>
          <Nav></Nav>
        </Left>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
