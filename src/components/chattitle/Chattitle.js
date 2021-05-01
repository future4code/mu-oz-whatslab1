import React from 'react'
import "./Chattitle.css";
import daryl from "../../images/profiles/daryl.png";


function ChatTitle() {
    return (
        <div id="chat-title">
        <span>Daryl</span>
        <img src={daryl} alt="Daryl" />
      </div>
    )
}

export default ChatTitle
