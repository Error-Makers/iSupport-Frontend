import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styled from "styled-components";
import Community from "../components/Community";
import  AuthContect  from "../context/auth/main";
import { BsSearch } from "react-icons/bs";
const Browse = (props) => {
  const [state, setState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

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

  const idxOfLst = currentPage * postsPerPage;
  const idxOfFirst = idxOfLst - postsPerPage;
  const currentPosts = communites.slice(idxOfFirst,idxOfLst);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // search: e.target.value.substr(0, 20)
  let filterdCommunity = currentPosts.filter((item) => {
    return (
      item.community_name.toLowerCase().indexOf(state.toLowerCase()) !== -1
    );
  });
  let pageNumbers = [];
  for (let i = 0; i < Math.ceil(communites.length/ postsPerPage); i++) {
      pageNumbers.push(i);
  }
 
  
  return (
    <div>
      {/* variant="dark" */}
      {/* <Carousel  style={{marginTop: '4%'}} > */}

<h1 style={{marginLeft:'27%',fontSize:'48px',paddingTop:'2%',color:'#311B92'}}>Search for Community</h1>

      <InputGroup
        className="mb-3"
        style={{
          marginLeft: "20%",
          marginTop: "2%",
          
          width:'680px',
         
         
        }}
      >
        <div style={{}}>
        {/* <BsSearch  /> */}
        </div>
        <Form.Control
         
          onChange={(e) => setState(e.target.value.substr(0, 20))}
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          style={{
          
          
            height: '60px',
            boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
            borderRadius:'30px'
          }}
         
        />
         <BsSearch style={{fontSize:'30px',marginTop:'10px',zIndex:'1',position:'absolute',right:'12px',color:'#D1D1D1'}} />
      </InputGroup>
      
      <p style={{marginLeft:'45%'}}>OR</p>
<AuthContect  >
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
       <div style={{margin:'auto',width:'50%'}}>
            <nav style={{textAlign:'center'}} >
                    <ul className="pagination" >
                         {
                            pageNumbers.map((number) => {
                                return (
                                    <li  key={number} className='page-item' >
                                        <button onClick={()=>paginate(number)} href='!#' className='page-link' > 
                                        {number} 
                                        </button>
                                      
                                        </li>
                                )
                            })
                        }
                    </ul>
                </nav>
             </div>
    </div>
  );
};

export default Browse;
