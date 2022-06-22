import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";
import logo from "../assets/logo.png";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--Paper-Light);
  height: 10vh;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--Paper-Light);
  height: 10vh;
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 10px 5px 7px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1vw;
`;

const Image = styled.img`
  width: 4rem;
  height: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 40vw;
`;

const Link = styled.a`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: var(--Primary-Main);
    border-radius: 3px;
    color: var(--Paper-Light);
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const fill = keyframes`
0%{
  background-color: transparent;
}
100% {
  background-color: rgb(9, 200, 195);
}
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: initial;
  height: 7.5vh;
  width: 15vw;
  margin: 0;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid var(--Primary-Main);
  color: var(--Primary-Main);
  &:hover {
    animation: ${fill} 0.1s linear;
    background-color: var(--Primary-Main);
    color: var(--Text-Secondary-Dark);
  }
`;

function HeaderBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNav = (e) => {
    if (window.scrollY > 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  let head = showNavbar ? (
    <Header>
      <div style={{ display: "flex" }}>
        <Image src={logo} />
        <Title>iSupport</Title>
      </div>
      <Nav>
        <Link href="/browse">Home</Link>
        <Link href="/browse">Browse</Link>
        <Link href="/browse">Profile</Link>
      </Nav>
      <StyledButton href="/home">Login</StyledButton>
    </Header>
  ) : (
    <MainHeader>
      <div style={{ display: "flex" }}>
        <Image src={logo} />
        <Title>iSupport</Title>
      </div>
      <Nav>
        <Link href="/browse">Home</Link>
        <Link href="/browse">Browse</Link>
        <Link href="/browse">Profile</Link>
      </Nav>
      <StyledButton href="/auth">Login</StyledButton>
    </MainHeader>
  );

  window.addEventListener("scroll", handleNav);
  return head;
}

export default HeaderBar;
