import React from "react";
import "./Messagelist.css";
import MessageUser from "./MessageUser";
import MyMessage from "./Mymessage";

function MessageList(props) {
  console.log(props.userTyping, props.message);
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
