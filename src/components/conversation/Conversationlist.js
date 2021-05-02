import React from "react";
import "./Conversationlist.css";

class ConversationList extends React.Component {
  render(){
  return (
    <div className="conversation" onClick={e => this.props.select({nome: this.props.nome, image: this.props.image})}> 
      <img src={this.props.image} alt={this.props.nome} />
      <div className="title-text">{this.props.nome}</div>
    </div>
  );
}
}

export default ConversationList;
