import React from "react";
import daryl from "../../images/profiles/daryl.png";

function MessageUser() {
  return (
    <div className="message-row other-message">
      <div className="message-content">
        <img src={daryl} alt="Daryl Duckmanton" />
        <div className="message-text">
          Sim, eu acho que é o mehlor para nós isso.
        </div>
        <div className="message-time">22:46</div>
      </div>
    </div>
  );
}

export default MessageUser;
