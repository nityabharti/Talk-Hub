import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at .....</p>
        </div>
        <div className="chat_headerRight"></div>
      </div>
    </div>
  );
}

export default Chat;
