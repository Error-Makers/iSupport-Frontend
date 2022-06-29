import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Input = styled.input`
  height: 70%;
  width: 90%;
  border-radius: 10px;
  text-align: center;
`;

const ChatFooter = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--Accent-Light);
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const NewMessage = ({ socket }) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <ChatFooter>
      <Form onSubmit={submitForm}>
        <Input
          className='search'
          value={value}
          placeholder='Type your message'
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
      </Form>
    </ChatFooter>
  );
};

export default NewMessage;
