import SideBar from "../components/sidebar";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";
import DeleteUsers from "../components/deleteUser";
import DeleteCommunities from "../components/deleteCommunity";
import Auth from "../context/auth/auth";

const Section = styled.section`
  postion: relative;
`;

const fill = keyframes`
0%{
  background-color: var(--Primary-Main);
}
100% {
  background-color: transparent;
}
`;

const Button = styled.a`
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
  width: 20vw;
  margin: 0;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid var(--Primary-Main);
  background-color: var(--Primary-Main);
  color: var(--Default-Light);
  position: fixed;
  right: 5vw;
  top: 5vh;
  &:hover {
    background-color: transparent;
    color: var(--Primary-Main);
    animation: ${fill} 0.2s linear;
  }
`;

const Admin = () => {
  const [showUsersSettings, setShowUsersSettings] = useState(true);

  const setView = (action) => {
    if (action === "DELETE") {
      setShowUsersSettings(true);
    } else {
      setShowUsersSettings(false);
    }
  };
  return (
    <Auth capability="delete all">
      <Section>
        <Button href="/">Return to Main View</Button>
        <SideBar setView={setView} />
        {showUsersSettings ? <DeleteUsers /> : <DeleteCommunities />}
      </Section>
    </Auth>
  );
};

export default Admin;
