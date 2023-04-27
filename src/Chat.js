import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import {
  AttachFile,
  InsertEmoticon,
  SearchOutlined,
} from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Ambuj</h3>
          <p>Last seen at .....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Ambuj</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">You</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Ambuj</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">You</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">You</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Ambuj</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Ambuj</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Ambuj</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">You</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">You</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="sumbit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
