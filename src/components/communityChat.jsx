import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./message";
import NewMessage from "./newMessage";

function CommunityChat() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3030`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">React Chat</header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <NewMessage socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default CommunityChat;
