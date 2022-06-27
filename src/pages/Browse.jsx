import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Community from "../components/Community";

import HeaderBar from "../components/Header";
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
  background: #e91e63;
  color: white;
  &:hover {
    opacity: 0.8;
    background: #e91e63;
    color: white;
  }
  &:focus {
    box-shadow: 0px 0px 5px #e91e63;
  }
`;
const Cards = styled.div`
  width: 90%;
`;

const ControlsContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  margin: 5vh 0;
  align-items: center;
`;

const Search = styled.input`
  width: 35vw;
  height: 7.5vh;
  border: 1px solid var(--Accent-Main);
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
  &:focus {
    box-shadow: 0px 0px 5px #e91e63;
  }
`;

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
      <HeaderBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ControlsContainer>
          <Search
            onChange={(e) => setState(e.target.value.substr(0, 20))}
            type="text"
            placeholder="Search"
          />
          <Community />
        </ControlsContainer>
      </div>
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
                        background: "#e91e63",
                        borderColor: "#e91e63",
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
