import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { LoginContext } from "../context/auth/main";

const Community = () => {
  const [show, setShow] = useState(false);
  const context = useContext(LoginContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API = process.env.REACT_APP_SERVER;
    let token = context.user.token;
    let communityData = {
      community_name: communityName,
      community_desc: communityDescription,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API}community`, communityData, config);
    console.log(response);
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          // marginLeft: "38%",
          backgroundColor: " #e91e63",
          borderColor: "transparent",
          color:"white",
          width: "20%",
          height: "7vh",
          position: "absolute",
          top: '32vh',
          right:"10vw",
          boxShadow: "10px 5px 7px rgba(0, 0, 0, 0.5);",
          fontWeight:"600",
          zIndex:"5"
        }}
      >
        Create New Community
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Community</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Community Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Community Name"
                onChange={(e) => setCommunityName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicdescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tell us about your community"
                onChange={(e) => setCommunityDescription(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#673ab7",
                borderColor: "#673ab7",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                // color:'black'
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Community;
