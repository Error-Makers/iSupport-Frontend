import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { device } from "../media";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import axios from "axios";
import { LoginContext } from "../context/auth/main";

const Wrapper = styled.div`
  background-color: white;
  padding-top: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  @media ${device.tablet} {
    padding: 20px;
    height: 316px;
    width: 65%;
    border-radius: 10px;
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

const ProgressBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: var(--Text-Primary);
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const MyPosts = styled.button`
  background-color: #00bcd4;
  border-radius: 15px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  width: 150px;
  &:active,
  &:hover {
    opacity: 0.7;
  }
`;

const ProgressCircle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 20px;
`;
const Contributions = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: var(--Accent-Main);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

const PersonalProgress = () => {
  const [personalProgress, setPersonalProgress] = useState({});
  let { communityId } = useParams();

  const API = process.env.REACT_APP_SERVER;
  const context = useContext(LoginContext);
  const token = context.user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getPersonalProgress(communityId) {
    const response = await axios.get(
      API + `community/${communityId}/personalProgress`,
      config
    );
    setPersonalProgress(response.data);
  }
  useEffect(() => {
    getPersonalProgress(communityId);
  }, []);
  return (
    <Wrapper>
      {personalProgress && (
        <ProgressContainer>
          <h4 style={{ color: "#673ab7" }}>My Progress</h4>
          <ProgressBody>
            <ProgressCircle>
              <div style={{ width: "150px", height: "150px" }}>
                <CircularProgressbar
                  value={Math.floor(personalProgress.numberOfTasks / 21)}
                  text={`${Math.floor(personalProgress.numberOfTasks / 21)}%`}
                />
              </div>
              <h5>Progress</h5>
            </ProgressCircle>
            <ProgressCircle>
              <div style={{ width: "150px", height: "150px" }}>
                <CircularProgressbar
                  value={100}
                  text={`${personalProgress.numberOfTasks} Days`}
                />
              </div>
              <h5>Streak</h5>
            </ProgressCircle>
          </ProgressBody>
        </ProgressContainer>
      )}
    </Wrapper>
  );
};

export default PersonalProgress;
