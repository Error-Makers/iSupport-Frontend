import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThisUser from './ThisUser';

const API = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;
const config = {
    headers: { Authorization: `Bearer ${token}` }
};


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: #fdfbff;
`;

const HeadPic = styled.div`
height: 33vh;
width: 100%;
background-size: cover;
background-position-y: 80%;
background-color: var(--Primary-Light);
`;

// const Img = styled.img`

// `;

const Info = styled.div`
display: flex;
flex-direction:row;

`;


const MyCommunity = styled.div`

`;
export default function Profile() {

    const [user, setUser] = useState({});

    async function getUserInformation() {
        const res = await axios.get(API + `/user/1`, config).then(res => {
            return res.data;
        }).catch(err => err);
        setUser(res);
    }
    useEffect(() => {
        getUserInformation();
    }, []);


    return (
        <Wrapper>
            <HeadPic>

            </HeadPic>
            <ThisUser></ThisUser>
            <Info>

            </Info>
        </Wrapper>
    )
}
