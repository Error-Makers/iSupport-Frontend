import React, { useEffect, useState } from "react";

function Messages({ socket }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };
    socket.emit("joinRoom", { username: "Karam", communityID: 1111 });
    socket.on("message", messageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("message", messageListener);
      socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => {
          console.log(message);
          return (
            <div
              key={message.id}
              className="message-container"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className="user">{message.username}:</span>
              <span className="message">{message.text}</span>
              <span className="date">
                {new Date(message.time).toLocaleTimeString()}
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default Messages;
