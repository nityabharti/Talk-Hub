//rfce: create react functional component and export
import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://e0.pxfuel.com/wallpapers/667/489/desktop-wallpaper-cute-cartoon-girl-cute-girl.jpg" />
      <div className="sidebarChat_info">
        <h2>Nitu</h2>
        <p>This message was deleted.</p>
      </div>
    </div>
  );
}

export default SidebarChat;
