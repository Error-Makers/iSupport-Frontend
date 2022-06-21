import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PersonalProgress() {

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
        <div>personalProgress</div>
    )
}
