import React from "react";
import "./Messagelist.css";
import MessageUser from "./MessageUser";
import MyMessage from "./Mymessage";

function MessageList() {
  return (
    <div id="chat-message-list">
      <MyMessage />
      <MessageUser />
      <MyMessage />
      <MessageUser />
    </div>
  );
}

export default MessageList;
