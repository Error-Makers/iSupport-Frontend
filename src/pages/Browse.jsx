import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import Community from "../components/Community";
import HeaderBar from "../components/Header";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
import axios from "axios";
import { LoginContext } from "../context/auth/main";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdfbff;
  padding-top: 90px;
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
`;

const StyledButton = styled.button``;
const Cards = styled.div`
  width: 20vw;
`;

const Search = styled.input`
  border: 1px solid #fff;
  background-color: #fff;
  outline: none;
  width: 54vw;
  height: 10vh;
  border-radius: 7px;
  position: absolute;
  left: 12%;
  top: 31vh;
  z-index: 1;
  font-size: 1.2rem;
  padding: 0 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const SearchButton = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  position: absolute;
  right: 35%;
  top: 33vh;
  z-index: 1;
  padding: 10px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  background-color: #e91e63;
  cursor: pointer;
`;

const HeadPic = styled.div`
  height: 36vh;
  width: 100%;
  margin-bottom: auto;
  display: flex;
  position: relative;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  background-size: 300% 300%;
  animation: AnimateBG 10s ease infinite;
`;

const IndexList = styled.div`
  height: 5vh;
  width: 40vw;
  display: flex;
  justify-content: center;
  background-color: #fefefe;
  margin-top: 2vh;
`;

const Index = styled.div`
  height: 5vh;
  width: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  font-size: 1.2rem;
  color: rgba(9, 200, 195, 1);
  background-color: #fefefe;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background: #673ab7;
  color: white;
  &.active {
    background: #aa88e5;
  }
`;

const StyledIcon = styled(FaSearch)`
  color: #ffffff;
`;

const Browse = (props) => {
  const navigate = useNavigate();
  const context = useContext(LoginContext);
  // const [state, setState] = useState("");
  const API = process.env.REACT_APP_SERVER;
  const searchRef = useRef();
  const indexRef = useRef();
  const [communites, setCommunitites] = useState([]);
  let [filteredCommunities, setFilteredCommunities] = useState([]);
  let [dataLength, setDataLength] = useState(0);
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = context.user.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let response = await axios.get(`${API}communities`, config);
      setCommunitites(response.data);
      setFilteredCommunities(response.data);
      setDataLength(response.data.length);
    };
    fetchData();
  }, [context.user.token]);
  const filterHandler = (e) => {
    setFilteredCommunities(
      communites.filter((ele) =>
        ele.community_name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    if (filteredCommunities.length <= 8) {
      setData([...filteredCommunities]);
    } else {
      let raw = ["", ...filteredCommunities];
      let renderedData = [];
      for (let i = 1; i <= 8; i++) {
        renderedData.push(raw[i]);
      }
      setData([...renderedData]);
    }
  }, [filteredCommunities]);
  const classesHandler = (e) => {
    const children = [].slice.call(indexRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };
  const handlePagination = (e) => {
    let raw = ["", ...filteredCommunities];
    let page = parseInt(e.target.innerHTML);
    let renderedData = [];
    for (let i = 1; i <= 8 * page; i++) {
      if (i >= 8 * page - 8 + 1 && i <= 8 * page) {
        renderedData.push(raw[i]);
      }
    }
    setData(renderedData);
  };
  let paginationIndex = Math.floor(dataLength / 8);

  let indices = Array.from({ length: paginationIndex }, (_, i) => i + 1).map(
    (ele, idx) => {
      if (idx === 0) {
        return (
          <Index className={"active"} onClick={handlePagination}>
            {ele}
          </Index>
        );
      }
      return <Index onClick={handlePagination}>{ele}</Index>;
    }
  );

  return (
    <>
      <HeaderBar />
      <HeadPic>
        <h1 style={{ fontWeight: "500", color: "white", margin: "auto" }}>
          Let's find a community for you
        </h1>
        <Search
          ref={searchRef}
          type="text"
          placeholder="  Search"
          onChange={(e) => {
            filterHandler(e);
          }}
        />
        <SearchButton>
          <StyledIcon />
        </SearchButton>
        <Community />
      </HeadPic>
      <Wrapper>
        <Parent style={{}}>
          {data.map((item, idx) => (
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
              {/* {pageNumbers.map((number) => {
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
              })} */}
              <IndexList ref={indexRef} onClick={classesHandler}>
                {indices}
              </IndexList>
            </ul>
          </nav>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Browse;
