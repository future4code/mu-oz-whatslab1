import React from "react";

function MessageUser(props) {
  return (
    <div className="message-row other-message">
      <div className="message-content">
        <img src={props.user.image} alt=""/>
        <div className="message-text">
          {props.data.message}
        </div>
        <div className="message-time">{props.data.time}</div>
      </div>
    </div>
  );
}

export default MessageUser;
