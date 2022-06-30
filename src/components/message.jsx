import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainContanier = styled.div`
  overflow-y: auto;
  width: 100%;
  border-radius: 15px;
  padding-top: 10px;
  max-height: 45vh;
`;

const MessageContanier = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.5rem;
  color: var(--Text-Primary);
  font-weight: 500;
  margin-bottom: 0.15rem;
  margin-left:8px;
`;

const Sender = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--Primary-Light);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border: 1.5px solid var(--Accent-Main);
`;

const MessageText = styled.div`
  margin: 10px 12px 6px;
  padding: 4px 8px 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.12);
  background: #fc005495;
  border-radius: 8px;
  max-width: 240px;
`;

function Messages({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.emit('joinRoom', { username: 'Karam', communityID: 1 });
    socket.on('message', messageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
    };
  }, [socket]);

  return (
    <MainContanier>
      {messages
        .sort((a, b) => a.time - b.time)
        .map((message) => {
          return (
            <MessageContanier key={message.id}>
              <Sender>{message.username.slice(0, 1)}</Sender>
              <MessageText className='message'>{message.text} </MessageText>
            </MessageContanier>
          );
        })}
    </MainContanier>
  );
}

export default Messages;
