import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { LoginContext } from "../context/auth/main";

const Community = () => {
  const context = useContext(LoginContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    context.createCommunity(communityName, communityDescription);
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          // marginLeft: "38%",
          backgroundColor: " #673ab7",
          borderColor: "#673ab7",
          width: '40%',
          height: '10%',
          position: "absolute",
          right: '58%',
          top: '65%'
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
              <Form.Label>Community Name </Form.Label>
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
            <Button variant="primary" type="submit">

              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Community;
