import Header from '../components/Header';
import Leaderboard from '../components/Leaderboard';
import Posts from '../components/Posts';
import PersonalProgress from '../components/PersonalProgress';
import Footer from '../components/Footer';
import CommunityChat from '../components/CommunityChat';
import styled from 'styled-components';
import { device } from '../media';

const Wrapper = styled.div`
  width: 100%;
`;
const CommunityGrid = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: auto auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 40px;
  align-items: center;
`;
const Top = styled.div`

`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
  width: 80%;
  margin: 0 auto;
  align-items: center;
  gap: 40px;
`;
const Bottom = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Community = () => {
  return (
    <Wrapper>
      <Header />
      <CommunityGrid>
        <Top>
          <PersonalProgress />
        </Top>
        <Middle>
          <Posts />
          <Leaderboard />
        </Middle>
        <Bottom>
          <CommunityChat />
        </Bottom>
      </CommunityGrid>
      <Footer />
    </Wrapper>
  );
};

export default Community;

// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// const API = 'http://localhost:3000';

// export default function Commuity(props) {
//     const [commuities, setCommuities] = useState([]);

//     // /commuities
//     async function getCommuities() {
//         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbGEiLCJpYXQiOjE2NTU3Mzg2NDB9.y31y2Glnt_TOQZBCl_v4lwaQCcHIvtkQrWJ9hATth10';

//         const config = {
//             headers: { Authorization: `Bearer ${token}` }
//         };
//         const response = await axios.get(API + `/commuities`, config);
//         console.log('response commuities', response);

//         setCommuities(response.data);
//     }

//     useEffect(() => {
//         getCommuities();
//     }, [])
//     return (
//         <div>leaderboard</div>
//     )
// }
