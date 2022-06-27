import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const API = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
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

    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    `;
    const Info = styled.div`
        display: flex;
        flex-direction:row;

    `;
    const MyCommunity = styled.div`
        
    `;
    return (
        <div>Profile</div>
    )
}
