import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styled from "styled-components";
import Community from "../components/Community";
import  AuthContect  from "../context/auth/main";
const Browse = () => {
  const [state, setState] = useState("");
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
  ];

  const Parent = styled.div`
    margin: 1rem;
    text-align: center;
    display: flex;
    z-index: 0;
  `;
  const Child = styled.div`
    display: inline-block;
    padding: 1rem 1rem;
  `;

  const Image = styled.img`
    border-radius: 10px;
    object-fit: cover;
    hight: 10%;
    width: 10%;
    position: absolute;
    z-index: 1;
    margin-top: 2%;
    margin-left: 5%;
  `;
  const Cards = styled.div`
    border-radius: 10px;
    margin-bottom: 1%;
    padding-top: 10px;
    width: 75%;
    height: 12rem;
    margin-left: 7%;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  `;
  // search: e.target.value.substr(0, 20)
  let filterdCommunity = communites.filter((item) => {
    return (
      item.community_name.toLowerCase().indexOf(state.toLowerCase()) !== -1
    );
  });

  return (
    <div>
      {/* variant="dark" */}
      {/* <Carousel  style={{marginTop: '4%'}} > */}

      <InputGroup
        className="mb-3"
        style={{
          marginLeft: "11%",
          marginTop: "2%",
          width: "70%",
        }}
      >
        <Form.Control
          onChange={(e) => setState(e.target.value.substr(0, 20))}
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          style={{
            borderColor: "#e91e63",
            boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
          }}
        />
      </InputGroup>
<AuthContect>
 <Community />
</AuthContect>
    

      {filterdCommunity.map((item, idx) => (
        <Parent key={idx}>
          <Child>
            <Image src={item.url} />
          </Child>

          <Child>
            <Cards>
              <Card >
                <Card.Body style={{ marginLeft: "12%", textAlign: "left" }}>
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
                    {item.aboutTheCommunity}
                  </Card.Text>

                  <Button
                    style={{
                      background: "#e91e63",
                      borderColor: "#e91e63",
                      marginLeft: "90%",
                    }}
                  >
                    Go to
                  </Button>
                </Card.Body>
              </Card>
            </Cards>
          </Child>
        </Parent>
      ))}
    </div>
  );
};

export default Browse;
