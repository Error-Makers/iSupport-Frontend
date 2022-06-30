import { Button, Form, InputGroup } from "react-bootstrap";
import Header from "../components/landing/components/NavBar";
import Footer from "../components/Footer";
const ContactUs = () => {
  const sendMessage = () => {
    alert("your message has been sent");
  };

  return (
    <>
      <Header />
      <h1
        style={{
          marginLeft: "28%",
          display: "flex",
          padding: "10px 10px 10px 10px",
          marginTop: "5%",
          fontWeight: "bold",
        }}
      >
        We’d love to hear from you
      </h1>

      <p
        style={{
          width: "60%",
          textAlign: "center",
          marginLeft: "20%",
          color: "rgba(0, 0, 0, 0.54)",
        }}
      >
        We’re here to help and answer any question you might have. We look
        forward to hearing from you
      </p>
      <Form style={{ width: "60%", marginLeft: "20%", marginBottom: "5%" }}>
        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              type="text"
              aria-label="What is your name?"
              placeholder="What is your name? *"
              style={{ borderRadius: "8px" }}
            />

            <Form.Control
              type="email"
              aria-label="What it your email?"
              placeholder="What it your email? *"
              style={{ borderRadius: "8px", marginLeft: "2%" }}
              required
            />
          </InputGroup>
          <br />
          <InputGroup>
            <Form.Control
              type="number"
              aria-label="What is your phone number?"
              placeholder="What is your phone number?"
              style={{ borderRadius: "8px" }}
            />
            <Form.Control
              type="text"
              aria-label="What is your community name?"
              placeholder="What is your community name?"
              style={{ borderRadius: "8px", marginLeft: "2%" }}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Write your message here">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your message here"
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        <Button
          style={{
            backgroundColor: "#673AB7",
            borderColor: "#673AB7",
            borderRadius: "39px",
            marginLeft: "82%",
          }}
          onClick={sendMessage}
        >
          send message
        </Button>
      </Form>

      <Footer />
    </>
  );
};

export default ContactUs;
