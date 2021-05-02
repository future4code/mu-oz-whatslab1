import React from "react";
import "./Chattitle.css";

function ChatTitle(props) {
  return (
    <div id="chat-title">
      <span>{props.user.nome}</span>
      <img src={props.user.image} alt={props.user.nome}/>
    </div>
  );
}

export default ChatTitle;
