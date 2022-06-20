import React from 'react'
import { personalProgressContext } from '../../context/personal-progress/personalPorgressContext'
export default function personalProgress() {
    const API = "http://isupport-server.herokuapp.com";
    const [personalProgress, setPersonalProgress] = useState([]);

    // /community/:id/personalProgress
    async function getPersonalProgress(communityId) {
        const response = await axios.get(API + `/community/${communityId}/personalProgress`);
        setPersonalProgress(response.data);
    }

    useEffect(() => {
        getPersonalProgress(props.communityId);
    }, [])
    return (
        <div>personalProgress</div>
    )
}
