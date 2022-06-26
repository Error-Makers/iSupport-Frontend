import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { device } from '../media';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media ${device.tablet} {
    padding: 20px;
    height: 316px;
    width: 65%;
    border-radius: 25px;
    box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ProgressHeader = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
`;

const ProgressBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  height: 140px;
  width: 140px;
`;
const Contributions = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  color: var(--Accent-Main);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

const PersonalProgress = () => {
  const [personalProgress, setPersonalProgress] = useState({});
  let { communityId } = useParams();

  const API = process.env.REACT_APP_API;
  const token = process.env.REACT_APP_TOKEN;
  // /community/:id/personalProgress
  async function getPersonalProgress(communityId) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      API + `/community/${communityId}/personalProgress`,
      config,
    );
    // console.log('response personal progress', response);
    setPersonalProgress(response.data);
  }
  useEffect(() => {
    getPersonalProgress(communityId);
  }, []);
  const percentage = 66;
  return (
    <Wrapper>
      {personalProgress && (
        <ProgressContainer>
          <h4 style={{ color: '#673ab7' }}>My Progress</h4>
          <ProgressHeader>
            <p
              style={{
                color: 'var(--Accent-Main)',
                fontStyle: ' normal',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              User
            </p>
            <p
              style={{
                color: 'var(--Accent-Main)',
                fontStyle: ' normal',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              {' '}
              Community
            </p>
          </ProgressHeader>
          <ProgressBody>
            <Contributions>
              <span>500</span>
              <span>Total Contribution</span>
              <MyPosts>My Posts :{personalProgress.numberOfTasks}</MyPosts>
            </Contributions>
            <ProgressCircle>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <span>Current Progress</span>
            </ProgressCircle>
          </ProgressBody>
        </ProgressContainer>
      )}
    </Wrapper>
  );
};

export default PersonalProgress;
