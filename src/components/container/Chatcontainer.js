import React from "react";
import ChatSearch from "../search/Chatsearch";
import ConversationList from "../conversation/Conversationlist";
import WhoWrites from "../whowrites/Whowrites";
import ChatTitle from "../chattitle/Chattitle";
import MessageList from "../message/Messagelist";
import SendInput from "../sendinput/Sendinput";
import "./Chatcontainer.css";
import { myUsers, unknowUser } from "./helpers";

class ChatContainer extends React.Component {

  state = {
    users: myUsers,
    userSelected: unknowUser,
    userTyping: 'me',
    message: ''
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

  //escolher o usuário que vai enviar a mensagem
  
  onUserTyping = (user) => {
    let userTyping = user;
    this.setState({ userTyping});
    this.setState({message: ''})
  };

  onMessageSended = (message) => {
    this.setState({ message });
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
        <WhoWrites user={this.state.userSelected} userTyping={this.onUserTyping}/>
        <ChatTitle user={this.state.userSelected} />
        <MessageList userSelected={this.state.userSelected} userTyping={this.state.userTyping} message={this.state.message} />
        <SendInput message={this.onMessageSended}/>  
      </div>
    );
  }
}

export default ChatContainer;
