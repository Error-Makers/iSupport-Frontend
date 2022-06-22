import React from 'react';
import styled from 'styled-components';
import { device } from '../media';
const API = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0 20px;
  gap: 30px;
`;

const TopComunityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
  grid-auto-flow: row;
 
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 40px 50px;
    grid-auto-flow: row;
  }
`;

const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: space-around;
  background: var(--Paper-Light);
`;

const CommunityImage = styled.img`
  display: flex;
  flex: row;
  justify-content: space-between;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const CommunityTitle = styled.span`
  color: var(--Accent-Main);
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
`;

const CommunityMembers = styled.span`
  color: var(--Default-Main);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

const TopComunity = () => {
  const [topCommuities, settopCommuities] = useState([]);


  // /trending
  async function gettopCommuities() {

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(API + `/trending`, config);
    console.log('response topCommuities', response);

    settopCommuities(response.data);
  }

  useEffect(() => {
    gettopCommuities();
  }, []);


  return (
    <Wrapper>
      <h1>Top Community</h1>
      <TopComunityContainer>
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <CommunityCard key={idx}>
            <CommunityImage src='https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
            <CommunityMembers>
              500+ Members
              {/* {`{item.noOfusers}+12`} */}
            </CommunityMembers>
            <CommunityTitle>
              Quit Smoking
              {/* {item.community_name} */}
            </CommunityTitle>
          </CommunityCard>
        ))}
      </TopComunityContainer>
    </Wrapper>
  );
};

export default TopComunity;
