import styled from "styled-components";
import { keyframes } from "styled-components";
import logo from "../assets/logo.png";
import { useRef, useState, useContext } from "react";
import avatar from "../assets/avatar.png";
import { LoginContext } from "../context/auth/main";
import { useNavigate } from "react-router-dom";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--Paper-Light);
  height: 10vh;
  width: 100%;
  &.active {
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 10px 5px 7px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1vw;
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: var(--Primary-Dark);
`;

const Image = styled.img`
  width: 3.3rem;
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
  color: var(--Text-Primary);
  &:hover {
    background-color: var(--Primary-Main);
    border-radius: 3px;
    color: var(--Default-Light);
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
  background-color: var(--Primary-Main);
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
    background-color: var(--Primary-Main);
    color: var(--Default-Light);
    animation: ${fill} 0.2s linear;
  }
`;

const LoginInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  height: 10vh;
`;

const OptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fefefe;
  width: 17.5vw;
  position: fixed;
  z-index: 10;
  top: 10vh;
  right: 2.5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  width: 17.4vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 10vh;
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  background: transparent;
  cursor: pointer;
`;

function HeaderBar() {
  const navigate = useNavigate();
  const headerRef = useRef();
  let context = useContext(LoginContext);
  const [show, setShow] = useState(false);
  const handleNav = (e) => {
    if (window.scrollY > 50) {
      headerRef.current.classList.add("active");
    } else {
      headerRef.current.classList.remove("active");
    }
  };
  window.addEventListener("scroll", handleNav);
  const loggedIn = context.loggedIn ? (
    <LoginInfo>
      <Avatar src={avatar} alt="logo" onClick={() => setShow(!show)} />
    </LoginInfo>
  ) : (
    <StyledButton href="/auth">Login</StyledButton>
  );

  return (
    <>
      <MainHeader ref={headerRef}>
        <div style={{ display: "flex" }}>
          <Image src={logo} />
          <Title>iSupport</Title>
        </div>
        <Nav>
          <Link href="/">Home</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/profile">Profile</Link>
        </Nav>
        {loggedIn}
      </MainHeader>
      {show && (
        <OptionsDiv>
          <Option style={{ height: "15vh" }}>{context.user.username}</Option>
          <Option>Profile Settings</Option>
          <Option
            onClick={() => {
              setShow(!show);
              context.logout();
              navigate("/");
            }}
          >
            Log out
          </Option>
        </OptionsDiv>
      )}
    </>
  );
}

export default HeaderBar;
