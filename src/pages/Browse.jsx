import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Community from "../components/Community";
import NavBar from "../components/landing/components/NavBar";
import Footer from "../components/Footer";

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  padding-top: 10px;
`;

const StyledButton = styled.button`
  background: #673ab7;
  color: white;
  // &:hover {
  //   opacity: 0.8;
  //   background: #e91e63;
  //   color: white;
  // }
  // &:focus {
  //   box-shadow: 0px 0px 5px #e91e63;
  // }
`;
const Cards = styled.div`
  width: 80%;
`;

const ControlsContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  margin: 5vh 0;
  align-items: center;
`;

const Search = styled.input`
  border: 1px solid #fff;
  background-color: #fff;
  outline: none;
  width: 40%;
  height: 10%;
  border-radius:7px;
  position: absolute;
  left: 2%;
  top: 54%;
  z-index: 1;
  &:focus {
    box-shadow: 0px 0px 5px #e91e63;
  }
`;

const SearchButton = styled.button`
hight:8%;
`

const Header1 = styled.div`
  width: 100%;
  height:100%;
  background:#d1c4e9 ;
  
  // background-image:
  //     linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));
     

      // background-image:
  //   linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
  //   url('https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjdGl2aXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1300&q=60');
    object-fit: cover;
    // background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.div`
// background-image:
//     linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));

// background: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))

// color: #fff;
position:absolute;
 left:50%;
top:20%;
// z-index: 1;

`

let communites = [
  {
    community_id: 1,
    community_name: "Football",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:41.318Z",
  },
  {
    community_id: 2,
    community_name: "smoke",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:24.349Z",
  },
  {
    community_id: 3,
    community_name: "healthy life style",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:41.318Z",
  },
  {
    community_id: 4,
    community_name: "entreatment",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:24.349Z",
  },
  {
    community_id: 5,
    community_name: "reading",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:24.349Z",
  },
  {
    community_id: 6,
    community_name: "food",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:41.318Z",
  },
  {
    community_id: 7,
    community_name: "sport",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:24.349Z",
  },
  {
    community_id: 8,
    community_name: "Study",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:24.349Z",
  },

  {
    community_id: 9,
    community_name: "healthy life style",
    aboutTheCommunity:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit inventore neque eaque nam corrupti ratione exercitationem soluta expedita dolores iste praesentium, unde excepturi, architecto nesciunt provident tempora. Minus, iste fuga",
    url: "https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg",
    createdAt: "2022-06-21T08:37:41.318Z",
  },
];

const Browse = (props) => {
  const [state, setState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const idxOfLst = currentPage * postsPerPage;
  const idxOfFirst = idxOfLst - postsPerPage;
  const currentPosts = communites.slice(idxOfFirst, idxOfLst);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // search: e.target.value.substr(0, 20)
  let filterdCommunity = currentPosts.filter((item) => {
    return (
      item.community_name.toLowerCase().indexOf(state.toLowerCase()) !== -1
    );
  });
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(communites.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <NavBar />


      <Header1>
     
        {/* <ControlsContainer> */}

        <h1 style={{color: 'white',position:'absolute', left:'10%',top:'40%',zIndex:'1'}}>Let's find community for you </h1>
       
       <Image>
       <img  src="https://camo.githubusercontent.com/26ce91f48dc31312752120630a6b1b87d85df38b26302d8f0c15d0dbfcb4771b/68747470733a2f2f6d656469612e6973746f636b70686f746f2e636f6d2f70686f746f732f72656d6f74652d776f726b2d616e642d73747564792d6f6e6c696e652d6170706c69636174696f6e2d616e642d736f6369616c2d6e6574776f726b732d666f722d636861742d706963747572652d6964313330323938363334323f6b3d3230266d3d3133303239383633343226733d3631327836313226773d3026683d6b4756656d755463376f4b62414a34664a335677592d726f314f50466c4b434e4a556b42736672724e4b343d"/>
       </Image>
        <Search
          onChange={(e) => setState(e.target.value.substr(0, 20))}
          type="text"
          placeholder="Search"
        />



        <Community />
        </Header1>
        {/* <Button style={{position: "absolute",right:'31%',top:'55.5%',zIndex:'1',width:'120px',borderRadius:'7px',backgroundColor:'#673ab7',borderColor:'#673ab7'}}> Search</Button> */}
       
        {/* <Community /> */}
        {/* </ControlsContainer> */}
     
      
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <ControlsContainer>
          <Search
            onChange={(e) => setState(e.target.value.substr(0, 20))}
            type="text"
            placeholder="Search"
          />
          <Community />
        </ControlsContainer>
      </div> */}
      <div>
        <Parent style={{}}>
          {filterdCommunity.map((item, idx) => (
            <div key={idx}>
              {/* <Image src={item.url} /> */}
              <Cards>
                <Card>
                  <Card.Body style={{ textAlign: "left" }}>
                    {/* <Image src={item.url} /> */}
                    <Card.Img variant="top" src={item.url} />
                    <Card.Title style={{ color: "#311B92" }}>
                      {item.community_name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#303030",
                      }}
                    >
                      {item.aboutTheCommunity.slice(0, 30)}
                    </Card.Text>

                    <Button
                      style={{
                        background: "#673ab7",
                        borderColor: "#673ab7",
                      }}
                    >
                      Go to
                    </Button>
                  </Card.Body>
                </Card>
              </Cards>
            </div>
          ))}
        </Parent>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "25%",
            marginTop: "3%",
          }}
        >
          <nav style={{ textAlign: "center" }}>
            <ul className="pagination">
              {pageNumbers.map((number) => {
                return (
                  <li key={number} className="page-item">
                    <StyledButton
                      onClick={() => paginate(number)}
                      href="!#"
                      className="page-link"
                    >
                      {number}
                    </StyledButton>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
