import React, { useState, useEffect } from 'react'
import axios from 'axios';


const API = process.env.REACT_APP_API;

export default function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([]);


    // /community/:id/leaderboard  Leaderboard Information for a Community with :id=communityId
    async function getLeaderboard(communityId) {
        const token = process.env.REACT_APP_TOKEN;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get(API + `/community/${communityId}/leaderboard`, config);
        // console.log('response leaderboard', response);

        setLeaderboard(response.data);
    }

    useEffect(() => {
        getLeaderboard(2);
    }, [])
    return (
        <div>leaderboard</div>
    )
}
