import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainContanier = styled.div`
  height: 45vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

const MessageContanier = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.5rem;
  color: var(--Text-Primary);
  margin-bottom: 0.2rem;
  width: 80%;
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
`;

const MessageText = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: var(--Primary-Light);
  color: var(--Text-Primary);
  margin-bottom: 0.2rem;
  display: flex;
  margin-left: 3%;
  border-radius: 15px;
  min-width: 70%;
  min-height: 30px;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #dd4397 transparent transparent;
  display: inline-block;
  vertical-align: middle;
`;

function Messages({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.emit("joinRoom", { username: "Karam", communityID: 1 });
    socket.on("message", messageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("message", messageListener);
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
              <MessageText className="message">{message.text} </MessageText>
            </MessageContanier>
          );
        })}
    </MainContanier>
  );
}

export default Messages;
