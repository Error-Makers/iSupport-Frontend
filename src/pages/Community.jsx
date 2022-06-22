import Header from '../components/Header';
import Leaderboard from '../components/Leaderboard';
import Posts from '../components/Posts';
import PersonalProgress from '../components/PersonalProgress';
import Footer from '../components/Footer';
import CommunityChat from '../components/CommunityChat';
import styled from 'styled-components';


const Wrapper = styled.div`
  
`



const Community = () => {
  return (
    <Wrapper>
         <Header/>
         <PersonalProgress/>
         <Leaderboard/>
         <Posts/>
         <CommunityChat/>
         <Footer/>
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
