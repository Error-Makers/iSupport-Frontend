import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  background-color: var(--Accent-Main);
  opacity: 0.7;
  height: 50px;
  /* margin-top: 2vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 6vh;
  width: 50%;
  border-radius: 10px;
  text-align: center;
`;

const NewMessage = ({ socket }) => {
  const [value, setValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("message", value);
    setValue("");
  };

  return (
    <Form onSubmit={submitForm}>
      <Input
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </Form>
  );
};

export default NewMessage;
