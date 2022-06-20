import React from "react";
import axios from "axios";

export const personalProgressContext = React.createContext();

export default function personalProgressProvider() {
    const API = "http://isupport-server.herokuapp.com";
    const [personalProgress, setPersonalProgress] = useState([]);

    // /community/:id/personalProgress
    async function getPersonalProgress(communityId) {
        const response = await axios.get(API + `/community/${communityId}/personalProgress`);
        setPersonalProgress(response.data);
    }

    const state = { personalProgress, setPersonalProgress, getPersonalProgress };
    return (
        <personalProgressContext.Provider value={state}>
            {props.children}
        </personalProgressContext.Provider>
    )
}
