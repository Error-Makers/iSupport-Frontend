import React, { useState, useEffect } from 'react'
export default function leaderboard(props) {
    const API = "http://isupport-server.herokuapp.com";
    const [leaderboard, setLeaderboard] = useState([]);


    // /community/:id/leaderboard  Leaderboard Information for a Community with :id=communityId
    async function getLeaderboard(communityId) {
        const response = await axios.get(API + `/community/${communityId}/leaderboard`);
        setLeaderboard(response.data);
    }

    useEffect(() => {
        getLeaderboard(props.communityId);
    }, [])
    return (
        <div>leaderboard</div>
    )
}
