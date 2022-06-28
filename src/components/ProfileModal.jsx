import { Modal, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../context/auth/main";
import axios from "axios";

const StyledButton = styled(Button)`
  background-color: #673ab7;
  border-color: #673ab7;
  boxshadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const UpdateUser = (props) => {
  const API = process.env.REACT_APP_SERVER;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const context = useContext(LoginContext);

  const handleSubmit = async () => {
    let update = {
      email: email,
      firstname: firstName,
      lastname: lastName,
    };
    let request = await axios.put(`${API}user/${context.user.user_id}`, update);
  };
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update User Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <StyledButton
          variant="primary"
          onClick={() => {
            handleSubmit();
            props.handleClose();
          }}
        >
          Save Changes
        </StyledButton>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateUser;
