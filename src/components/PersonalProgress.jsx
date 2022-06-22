import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import axios from 'axios';




const PersonalProgressContainer = styled.div`
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: 'Open Sans';
`;

const ProgressCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--Paper-Light);
  border-radius: 20px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
`;

const ProgressHeader = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
`;
const ProgressBody = styled.div`
  color: var(--Text-Primary);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
`;
const Streak = styled.div`
  color: var(--Text-Primary);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
`;
const Contributions = styled.div`
  color: var(--Text-Primary);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
`;
const MyPosts = styled.button`
  background-color: #673ab7;
  border-radius: 20px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  width: 120px;
  &:active,
  &:hover {
    opacity: 0.7;
  }
`;

const PersonalProgress = () => {
  const [personalProgress, setPersonalProgress] = useState({});
  const API = process.env.REACT_APP_API;
  const token = process.env.REACT_APP_TOKEN;
  // /community/:id/personalProgress
  async function getPersonalProgress(communityId) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(API + `/community/${communityId}/personalProgress`, config);
    // console.log('response personal progress', response);
    setPersonalProgress(response.data);
  }
  useEffect(() => {
    getPersonalProgress(1);
  }, [])
  return (
    < PersonalProgressContainer >
      {personalProgress && (<ProgressCard>
        {console.log(personalProgress)}
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
          <Streak></Streak>
          <Contributions></Contributions>
          <MyPosts>My Posts :{
            personalProgress.numberOfTasks

          }</MyPosts>
        </ProgressBody>
      </ProgressCard>)}
    </PersonalProgressContainer >
  );
};

export default PersonalProgress;

