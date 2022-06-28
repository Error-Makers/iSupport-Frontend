import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import Community from "../components/Community";
import HeaderBar from "../components/Header";

import Footer from "../components/Footer";
import axios from "axios";
import { LoginContext } from "../context/auth/main";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdfbff;
  padding-top: 50px;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  width: 90vw;
  // padding-left: 25px;
  // padding-top: 10px;
  // width:70vw;
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
  width: 20vw;
`;

const Search = styled.input`
  border: 1px solid #fff;
  background-color: #fff;
  outline: none;
  width: 54%;
  height: 10%;
  border-radius: 7px;
  position: absolute;
  left: 12%;
  top: 45%;

  z-index: 1;
  font-size: 1.2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const SearchButton = styled.button`
  hight: 8%;
`;

const Header1 = styled.div`
  width: 100%;
  height: 100%;
  background: #d1c4e9;

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
  position: absolute;
  left: 50%;
  top: 20%;
  // z-index: 1;
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
  const navigate = useNavigate();
  const context = useContext(LoginContext);
  // const [state, setState] = useState("");
  const API = process.env.REACT_APP_SERVER;

  const [communites, setCommunitites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  useEffect(() => {
    const fetchData = async () => {
      const token = context.user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let response = await axios.get(`${API}communities`, config);
      setCommunitites(response.data);
      console.log(response);
    };
    fetchData();
  }, [context.user.token]);

  let filterData = (val) => {
    let filterdCommunity = communites.filter((item) => {
      return (
        item.community_name.toLowerCase().indexOf(val.toLowerCase()) !== -1
      );
    });
    setCommunitites(filterdCommunity);
  };
  const idxOfLst = currentPage * postsPerPage;
  const idxOfFirst = idxOfLst - postsPerPage;
  useEffect(() => {
    const currentPosts = communites.slice(idxOfFirst, idxOfLst);
    setCommunitites(currentPosts);
  }, [idxOfLst]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // search: e.target.value.substr(0, 20)

  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(communites.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <HeaderBar />

      <img
        style={{
          height: "50vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPositionY: "80%",
        }}
        src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYWRpZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      />
      <h1
        style={{
          position: "absolute",
          top: "31%",
          left: "8%",
          color: "#fff",
          fontSize: "30px",
        }}
      >
        Let's find community for you
      </h1>
      <Search
        onChange={(e) => filterData(e.target.value.substr(0, 20))}
        type="text"
        placeholder="  Search"
      />

      <Community />

      <Wrapper>
        <Parent style={{}}>
          {communites.map((item, idx) => (
            <div key={idx}>
              {/* <Image src={item.url} /> */}

              <Cards>
                <Card>
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Image src={item.url} /> */}
                    <Card.Img
                      variant="top"
                      src={"https://pbs.twimg.com/media/E6WbTaBUUAYD_OD.jpg"}
                    />
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
                      onClick={() => {
                        navigate(`/community/${item.community_id}`);
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
      </Wrapper>
      <Footer />
    </>
  );
};

export default Browse;
