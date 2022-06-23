import styled from "styled-components";
import { useRef, useState } from "react";

const SideContainer = styled.div`
  width: 20vw;
  height: 100%;
  background-color: var(--Primary-Main);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  color: var(--Paper-Light);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
`;

const TabName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  padding: 3rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 25vh;
`;

const SubTabs = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 1.25rem;
  padding: 1rem 0.75rem;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &.active {
    border-left: 10px solid #fefefe;
  }
`;

const Footer = styled.footer`
  padding: 0.2rem;
  margin-top: auto;
`;

function SideBar(props) {
  const navRef = useRef();

  const activeHandler = (e) => {
    const children = [].slice.call(navRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  let tabs = (
    <>
      <SubTabs
        className={"active"}
        onClick={() => {
          props.setView("DELETE");
        }}
      >
        Manage Users
      </SubTabs>

      <SubTabs
        onClick={() => {
          props.setView("COMMUNITY");
        }}
      >
        Manage Communities
      </SubTabs>
    </>
  );

  return (
    <SideContainer className={props.className}>
      <TabName>Admin Panel</TabName>
      <TabsContainer ref={navRef} onClick={activeHandler}>
        {tabs}
        <Footer>&copy; iSupport</Footer>
      </TabsContainer>
    </SideContainer>
  );
}

export default SideBar;
