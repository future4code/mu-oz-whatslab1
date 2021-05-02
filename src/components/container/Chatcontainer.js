import React from "react";
import ChatSearch from "../search/Chatsearch";
import ConversationList from "../conversation/Conversationlist";
import WhoWrites from "../whowrites/Whowrites";
import ChatTitle from "../chattitle/Chattitle";
import MessageList from "../message/Messagelist";
import SendInput from "../sendinput/Sendinput";
import "./Chatcontainer.css";
import stacey from "../../images/profiles/stacey.jpeg";
import daryl from "../../images/profiles/daryl.png";
import sarah from "../../images/profiles/sarah.jpeg";
import jacob from "../../images/profiles/jacob.png";
import john from "../../images/profiles/john.jpeg";
import unknown from "../../images/profiles/unknown.jpg";

class ChatContainer extends React.Component {
  myUsers = [
    {
      image: stacey,
      nome: "Stacey",
    },
    {
      image: daryl,
      nome: "Daryl",
    },
    {
      image: sarah,
      nome: "Sarah",
    },
    {
      image: jacob,
      nome: "Jacob",
    },
    {
      image: john,
      nome: "John",
    },
    {
      image: unknown,
      nome: "Desconhecido",
    },
  ];
  
  state = {
    users: this.myUsers,
  };

  onSearchSubmit = (text) => {
    if (!text) {
      let users = this.myUsers;
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

  render() {
    return (
      <div id="chat-container">
        <ChatSearch change={this.onSearchSubmit} />
        <div id="conversation-list">
          {this.state.users.map((user) => (
            <ConversationList image={user.image} nome={user.nome} />
          ))}
        </div>
        <WhoWrites />
        <ChatTitle />
        <MessageList />
        <SendInput />
      </div>
    );
  }
}

export default ChatContainer;
