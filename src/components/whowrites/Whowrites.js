import React from "react";
import "./Whowrites.css";

class WhoWrites extends React.Component {
  render() {
  return (
    <div id="new-message-container">
      <div className="message" onChange={e =>  this.props.userTyping(e.target.value)}>
        <input type="radio" id="me" name="user" value="me" />
        <label for="me">Eu</label>
        <input type="radio" id="other" name="user" value="other"/>
        <label for="other">{this.props.user.nome}</label>
      </div>
    </div>
  );
}

}

export default WhoWrites;
