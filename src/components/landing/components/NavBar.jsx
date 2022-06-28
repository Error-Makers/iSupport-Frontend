import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import styled from "styled-components";
import { device } from "../../../media";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  background: transparent;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const handleScroll = (e) => {
    setIsActive(e);
  };

  window.addEventListener("scroll", function () {
    var winTop = window.scrollY;
    if (winTop >= 50) {
      handleScroll(true);
    } else {
      handleScroll(false);
    }
  });

  return (
    <Nav className={isActive ? "header" : ""}>
      <Logo>
        <img src={logo} alt="iSupport" width="45" height="33" />
        iSupport
      </Logo>
      <Menu>
        <li>
          <Link to="hero" smooth={true} duration={200}>
            Home
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={200}>
            Features
          </Link>
        </li>
        <li>
          <Link to="discover" smooth={true} duration={200}>
            Discover
          </Link>
        </li>
        <li>
          <Link to="stories" smooth={true} duration={200}>
            Stories
          </Link>
        </li>
        <ButtonWrapper>
          <NavButton
            onClick={() => {
              navigate("/auth");
            }}
          >
            Login
          </NavButton>
        </ButtonWrapper>
      </Menu>
      {/* Hamburger */}
      <Hamburger>
        <FaBars />
      </Hamburger>

      {/* Mobile menu */}
      <MobileMenu>
        <MenuItem>
          <Link to="#hero" smooth={true} duration={200}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="features" smooth={true} duration={200}>
            Features
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="discover" smooth={true} duration={200}>
            Discover
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="stories" smooth={true} duration={200}>
            Stories
          </Link>
        </MenuItem>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;
