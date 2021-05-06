import React from "react";
import ChatSearch from "../search/Chatsearch";
import ConversationList from "../conversation/Conversationlist";
import ChatTitle from "../chattitle/Chattitle";
import MessageList from "../message/Messagelist";
import "./Chatcontainer.css";
import { myUsers, unknowUser } from "./helpers";


class ChatContainer extends React.Component {

  state = {
    users: myUsers,
    userSelected: unknowUser,
  };

  // procura usuario na lista de usuarios estáticos
  onSearchSubmit = (text) => {
    if (!text) {
      let users = myUsers;
      this.setState({ users });
    } else {
      let users = this.state.users.filter((user) => {
        let enteredText = text.toLowerCase().trim();
        let name = user.nome.toLowerCase();
        if (!enteredText.length) {
          return false;
        }
        return name.includes(enteredText);
      });
      this.setState({ users });
    }
  };

  // mudar titulo quando clica no usuario
  onUserSelected = (user) => {
    let userSelected = user;
    this.setState({ userSelected });
  };

  
  render() {
    return (
      <div id="chat-container">
        <ChatSearch change={this.onSearchSubmit} />
        <div id="conversation-list">
          {this.state.users.map((user) => (
            <ConversationList
              image={user.image}
              nome={user.nome}
              select={this.onUserSelected}
            />
          ))}
        </div>
        <ChatTitle user={this.state.userSelected} />
        <MessageList user={this.state.userSelected} />
      </div>
    );
  }
}

export default ChatContainer;
