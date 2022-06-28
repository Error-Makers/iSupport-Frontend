import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import styled from "styled-components";
import { device } from "../../../media";
import logo from "../../../assets/logo.png";

const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  background: transparent;
  color: #000000;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  &.active {
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 10px 5px 7px rgba(0, 0, 0, 0.2);
    background-color: var(--Paper-Light);
    height: 10vh;
    width: 100%;
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  color: #43618e;
`;

const Menu = styled.div`
  display: none;
  font-size: 18px;
  line-height: 28px;
  gap: 20px;
  @media ${device.tablet} {
    display: flex;
    list-style-type: none;
  }
`;

const Hamburger = styled.div`
  z-index: 20;
  @media ${device.tablet} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0e1f2f;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  @media ${device.mobileL} {
    display: none;
  }
`;

const MenuItem = styled.li`
  padding: 24px 0;
  font-size: 36px;
  line-height: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  background-color: var(--Secondary-Main);
  padding: 5px 30px;
  border-radius: 40px;
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

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const headerRef = useRef();
  const handleClick = () => setNav(!nav);
  const handleNav = (e) => {
    if (window.scrollY > 50) {
      let array = [].slice.call(headerRef.current.classList);
      if (array.indexOf("active") == -1) {
        headerRef.current.classList.add("active");
      }
    } else {
      headerRef.current.classList.remove("active");
    }
  };
  window.addEventListener("scroll", handleNav);
  return (
    <Nav ref={headerRef}>
      <Logo>
        <img src={logo} alt="iSupport" width="45" height="33" />
        iSupport
      </Logo>
      <Menu>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Features
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Discover
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Stories
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Communities
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Blog
          </Link>
        </li>
        <ButtonWrapper>
          <NavButton>Login</NavButton>
        </ButtonWrapper>
      </Menu>
      {/* Hamburger */}
      <Hamburger onClick={handleClick}>
        <FaBars />
      </Hamburger>

      {/* Mobile menu */}
      <MobileMenu>
        <MenuItem>
          <Link to="hero" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="work" smooth={true} duration={500} onClick={handleClick}>
            Work
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </MenuItem>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;
