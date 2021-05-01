import React from 'react';
import "./Conversationlist.css";
import stacey from "../../images/profiles/stacey.jpeg";
import daryl from "../../images/profiles/daryl.png";
import sarah from "../../images/profiles/sarah.jpeg";
import jacob from "../../images/profiles/jacob.png";
import john from "../../images/profiles/john.jpeg";
import unknown from "../../images/profiles/unknown.jpg";


function ConversationList() {
    return (
        <div id="conversation-list">
        <div className="conversation">
          <img src={stacey} alt="Stacey" />
          <div className="title-text">Stacey</div>
          <div className="conversation-message">Este é uma mensagem</div>
        </div>
        <div className="conversation">
          <img src={daryl} alt="Daryl" />
          <div className="title-text">Daryl</div>
          <div className="conversation-message">Very funny</div>
        </div>
        <div className="conversation">
          <img src={sarah} alt="Sarah" />
          <div className="title-text">Sarah</div>
          <div className="conversation-message">Very funny</div>
        </div>
        <div className="conversation">
          <img src={jacob} alt="Jacob" />
          <div className="title-text">Jacob</div>
          <div className="conversation-message">Este é uma mensagem</div>
        </div>
        <div className="conversation">
          <img src={john} alt="John" />
          <div className="title-text">John</div>
          <div className="conversation-message">Very funny</div>
        </div>
        <div className="conversation">
          <img src={unknown} alt="unknown" />
          <div className="title-text">Other</div>
          <div className="conversation-message">Very funny</div>
        </div>
      </div>
    )
}

export default ConversationList
