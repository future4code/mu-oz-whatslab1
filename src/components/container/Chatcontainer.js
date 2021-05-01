import React from "react";
import ChatSearch from "../search/Chatsearch";
import ConversationList from "../conversation/Conversationlist";
import WhoWrites from "../whowrites/Whowrites";
import ChatTitle from "../chattitle/Chattitle";
import MessageList from "../message/Messagelist";
import SendInput from "../sendinput/Sendinput";
import "./Chatcontainer.css";

function ChatContainer() {
  return (
    <div id="chat-container">
      <ChatSearch />
      <ConversationList />
      <WhoWrites />
      <ChatTitle />
      <MessageList />
      <SendInput />
    </div>
  );
}

export default ChatContainer;
