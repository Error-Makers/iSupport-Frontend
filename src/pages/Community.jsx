import { useParams } from "react-router-dom";

const Community = () => {
  let { communityId } = useParams();
  return <h1>Community: {communityId}</h1>;
};

export default Community;
