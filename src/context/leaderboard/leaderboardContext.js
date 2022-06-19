import React, { useState } from 'react';
import axios from 'axios';


export const leaderboardContext = React.createContext();

export default function leaderboardProvider() {
    const API = "http://isupport-server.herokuapp.com";
    const [leaderboard, setLeaderboard] = useState([]);

    // /community/:id/leaderboard  Leaderboard Information for a Community with :id=communityId
    async function getLeaderboard(communityId) {
        const response = await axios.get(API + `/community/${communityId}/leaderboard`);
        setLeaderboard(response.data);
    }
    const state = { leaderboard, setLeaderboard, getLeaderboard };

    return (
        <leaderboardContext.Provider value={state}>
            {props.children}
        </leaderboardContext.Provider>
    )
}
