import React from "react";
import styled from "styled-components";
import { device } from "../media";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoginContext } from "../context/auth/main";

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  height: 316px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media ${device.tablet} {
    width: 30%;
  }
`;

const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const LeaderboardCard = styled.div`
  display: flex;
  align-items: left;
  gap: 10px;
  margin: 5px auto;
  justify-content: space-around;
  background: var(--Paper-Light);
`;

const LeaderboardImage = styled.img`
  width: 60px;
  height: 60px;
  border: 2px solid var(--Accent-Main);
  border-radius: 50%;
`;

const LeaderboardTitle = styled.span`
  color: var(--Accent-Main);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const LeaderboardMembers = styled.span`
  color: var(--Default-Main);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const API = process.env.REACT_APP_SERVER;

const Leaderboard = (props) => {
  let context = useContext(LoginContext);
  const token = context.user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let { communityId } = useParams();
  const [leaderboard, setLeaderboard] = useState([]);

  async function getLeaderboard(communityId) {
    const response = await axios.get(
      API + `community/${communityId}/leaderboard`,
      config
    );

    setLeaderboard(response.data);
  }

  useEffect(() => {
    getLeaderboard(communityId);
  }, []);

  return (
    <Wrapper>
      <LeaderboardContainer>
        <h4 style={{ color: "#673ab7", justifySelf: "flex-start" }}>
          Leaderboard
        </h4>
        {leaderboard.map((item, idx) => (
          <LeaderboardCard key={idx}>
            <LeaderboardImage
              style={{ borderRadius: "50%" }}
              src="data:image/png;base64,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"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <LeaderboardTitle>
                {/* Name */}
                {item.username}
              </LeaderboardTitle>
              <LeaderboardMembers>
                {/* 500+ Contributions */}
                {item.progress + `  Contributions `}
              </LeaderboardMembers>
            </div>
          </LeaderboardCard>
        ))}
      </LeaderboardContainer>
    </Wrapper>
  );
};

export default Leaderboard;
