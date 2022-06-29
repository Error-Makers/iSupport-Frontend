import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './message';
import NewMessage from './newMessage';
import styled from 'styled-components';
import { device } from '../media';
import { Modal, Button } from 'react-bootstrap';
import './chat.css';
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: rgba(190, 132, 237, 0.1);
  position: relative;

`;

const ChatBanner = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--Accent-Light);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledModal = styled(Modal)``;

function CommunityChat(props) {
  const API = process.env.REACT_APP_SERVER;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(API);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div>
      {socket ? (
        <StyledModal
          show={props.show}
          onHide={props.handleClose}
          centered
          size='md'
          backdrop={false}
        >
          <ChatBanner/>
          <ChatContainer className='chat-container'>
            <Messages socket={socket} />
            <NewMessage socket={socket} />
          </ChatContainer>
        </StyledModal>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default CommunityChat;
