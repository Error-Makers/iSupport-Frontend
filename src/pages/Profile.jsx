import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { device } from "../media";
import Form from "react-bootstrap/Form";
import { MdEdit } from "react-icons/md";

import axios from "axios";
import HeaderBar from "../components/Header";
import Footer from "../components/Footer";
import { LoginContext } from "../context/auth/main";
import UpdateUser from "../components/ProfileModal";

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  min-height: 100%;
  display: flex;
  z-index: 0;
  position: relative;
  align-items: center;
  justify-content: center;
`;
const HeadPic = styled.div`
  height: 33vh;
  width: 100%;
  margin-bottom: auto;
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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 150px;
  padding: 100px 20px;
  z-index: 5;
  width: 75%;
  border-radius: 5px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  background-color: #ffff;
`;

const PicB = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  position: absolute;
  top: -100px;
  left: 10px;
  padding: 10px;
  z-index: 6;
  height: 170px;
  width: 170px;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  background-color: #ffff;
  @media ${device.tablet} {
    top: -100px;
    left: 0;
    right: 0;
  }
`;

const Edit = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  position: absolute;
  top: -25px;
  right: 10px;
  padding: 10px;
  z-index: 6;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  background-color: var(--Primary-Dark);
  cursor: pointer;
  @media ${device.tablet} {
    top: -25px;
    right: 120px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  gap: 20px;
`;
const CardTitle = styled.h3`
  color: var(--Primary-Main);
  font-weight: 700;
`;

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 150px;
  width: 150px;
  z-index: 1;
`;

let community = {
  community_id: 1,
  community_name: "Football",
  aboutTheCommunity:
    "The football community. News, results and discussion about the beautiful game.",
  url: "https://www.citypng.com/public/uploads/small/11639594314mvt074h0zt5cijvfdn7gqxbrya72bzqulyd5bhqhemb5iasfe7gbydmr2jxk8lcclcp6qrgaoiuiavf4sendwc3jvwadddqmli2d.png",
  createdAt: "2022-06-21T08:37:41.318Z",
};

const Profile = () => {
  const API = process.env.REACT_APP_API;
  const context = useContext(LoginContext);
  const config = {
    headers: { Authorization: `Bearer ${context.user.token}` },
  };
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getUserInformation() {
    const res = await axios
      .get(API + `user/${context.user.user_id}`, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
    setUser(res);
  }
  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <>
      <UpdateUser
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <HeaderBar />
      <Wrapper>
        <HeadPic />
        <Card>
          <Edit onClick={handleShow}>
            <MdEdit style={{ width: "30px", height: "30px", color: "white" }} />
          </Edit>

          <PicB>
            <Image src={community.url} />
          </PicB>
          <CardBody>
            <CardTitle>{context.user.username}</CardTitle>
          </CardBody>
          <Info>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                style={{ pointerEvents: "none" }}
                readOnly
                type="text"
                value={`${context.user.firstName}`}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ pointerEvents: "none" }}
                readOnly
                type="text"
                value={`${context.user.lastName}`}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ pointerEvents: "none" }}
                readOnly
                type="text"
                value={`${context.user.email}`}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ pointerEvents: "none" }}
                readOnly
                type="text"
                value="******"
              />
            </Form.Group>
          </Info>
        </Card>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Profile;
