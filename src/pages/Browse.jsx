import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styled from "styled-components";
import Community from "../components/Community";
import AuthContect from "../context/auth/main";
import { BsSearch } from "react-icons/bs";



const Browse = (props) => {
  const [state, setState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

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

  const Parent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
    padding-top: 10px;

   
  `;

  const Image = styled.img`
    object-fit: cover;
    hight: 30%;
    width: 60%;
  `;
  const Cards = styled.div`
    width: 90%;
    // box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  `;

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
    <div>
      {/* variant="dark" */}
      {/* <Carousel  style={{marginTop: '4%'}} > */}

      <h1
        style={{
          marginLeft: "27%",
          fontSize: "48px",
          paddingTop: "2%",
          color: "#311B92",
        }}
      >
        Search for Community
      </h1>

      <InputGroup
        className="mb-3"
        style={{
          marginLeft: "20%",
          marginTop: "2%",
          width: "680px",
        }}
      >
        <div style={{}}>{/* <BsSearch  /> */}</div>
        <Form.Control
          onChange={(e) => setState(e.target.value.substr(0, 20))}
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          style={{
            height: "60px",
            boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
            borderRadius: "30px",
          }}
        />
        <BsSearch
          style={{
            fontSize: "30px",
            marginTop: "10px",
            zIndex: "1",
            position: "absolute",
            right: "12px",
            color: "#D1D1D1",
          }}
        />
      </InputGroup>

      <p style={{ marginLeft: "45%" }}>OR</p>
      <AuthContect>
        <Community />
      </AuthContect>

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
                  <button
                    onClick={() => paginate(number)}
                    href="!#"
                    className="page-link"
                    style={{
                      background: "#e91e63",
                      borderColor: "#006064",
                      color: "white",
                    }}
                  >
                    {number}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Browse;
