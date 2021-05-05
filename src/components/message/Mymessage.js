import React from "react";

function MyMessage(props) {
  return (
    <div className="message-row you-message">
      <div className="message-content">
        <div className="message-text"><p>Eu:</p> {props.data.message}</div>
        <div className="message-time">{props.data.time}</div>
      </div>
    </div>
  );
}

export default MyMessage;
