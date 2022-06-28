import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./message";
import NewMessage from "./newMessage";
import styled from "styled-components";
import { device } from "../media";
import { Modal, Button } from "react-bootstrap";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding-top: 15px;
  @media ${device.tablet} {
    box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  }
`;

const StyledModal = styled(Modal)`
  border-radius: 20px;
`;

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
          size="md"
        >
          <ChatContainer className="chat-container">
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
