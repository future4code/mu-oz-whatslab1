import React from "react";
import "./Whowrites.css";

function WhoWrites(props) {
  return (
    <div id="new-message-container">
      <div className="message">
        <input type="radio" id="me" name="gender" value="me" />
        <label for="me">Eu</label>
      </div>
      <div className="message">
        <input type="radio" id="other" name="gender" value="other"/>
        <label for="other">{props.user.nome}</label>
      </div>
    </div>
  );
}

export default WhoWrites;
