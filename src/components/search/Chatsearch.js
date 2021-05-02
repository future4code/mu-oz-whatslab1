import React from "react";
import "./Chatsearch.css";

class ChatSearch extends React.Component {
  render() {
    return (
      <div id="search-container">
        <input type="text" placeholder="Procurar" onChange={e =>  this.props.change(e.target.value)} /> 
      </div>
    );
  }
}

export default ChatSearch;
