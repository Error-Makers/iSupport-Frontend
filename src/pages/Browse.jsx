import { Carousel, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Array.prototype.chunk = function(size) {
  const result = [];

  while (this.length) {
    result.push(this.splice(0, size));
  }

  return result;
};

const Browse = () => {
  let communites = [
    {
      community_id: 1,
      community_name: "foot ball",
      aboutTheCommunity: "foot ball",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:41.318Z",
    },
    {
      community_id: 2,
      community_name: "smoke",
      aboutTheCommunity: "smoke",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:24.349Z",
    },
    {
      community_id: 3,
      community_name: "health life style",
      aboutTheCommunity: "health life style",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:41.318Z",
    },
    {
      community_id: 4,
      community_name: "entreatment",
      aboutTheCommunity: "entreatment",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:24.349Z",
    },
    {
      community_id: 5,
      community_name: "reading",
      aboutTheCommunity: "reading",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:24.349Z",
    },
    {
      community_id: 6,
      community_name: "food",
      aboutTheCommunity: "food",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:41.318Z",
    },
    {
      community_id: 7,
      community_name: "sport",
      aboutTheCommunity: "sport",
      url:'https://cdn.pixabay.com/photo/2013/05/12/18/55/cigarette-110849__340.jpg',
      createdAt: "2022-06-21T08:37:24.349Z",
    },
  ];
 
  return (
    <div className="">
    <Carousel variant="dark">
      {communites.chunk(3).map((chunk, idx) => (
        <Carousel.Item key={idx} style={{}} >
          <Row>
            {chunk.map((item, idx2) => (
              <Col lg="3" key={idx2} style={{alignItems:'center'}}>
                <Card style={{width:'20rem',height:"20rem",alignItems:'center',marginLeft:'50%'}}>
                  <Card.Img variant="top" src={item.url} />
                  <Card.Body>
                    <Card.Title>
                       {item.community_name} 
                    </Card.Title>
                    <Card.Text>
                    {item.aboutTheCommunity}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default Browse;
