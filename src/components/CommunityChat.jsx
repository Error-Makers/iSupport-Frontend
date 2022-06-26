import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./message";
import NewMessage from "./newMessage";
import styled from "styled-components";
import { device } from "../media";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  overflow-y: auto;
  @media ${device.tablet} {
    border-radius: 25px;
    box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  }
`;

function CommunityChat() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3030`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div>
      {socket ? (
        <ChatContainer className="chat-container">
          <Messages socket={socket} />
          <NewMessage socket={socket} />
        </ChatContainer>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default CommunityChat;
