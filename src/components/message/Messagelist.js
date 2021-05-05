import React from "react";
import "./Messagelist.css";
import MessageUser from "./MessageUser";
import MyMessage from "./Mymessage";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], message: "" };
  }

  render() {
    let message = this.props.message;
    let items = this.state.items;
    if (message !== "" || items.length > 0) {
      items.push({
        message: message,
        userTyping: this.props.userTyping,
        time: Date().split(" ")[4],
      });

      if (items.length > 0) {
        let messages = items.reverse();
        return (
          <div id="chat-message-list">
            {messages.map((item) => (
              <>
                {item.userTyping === "me" ? (
                  <>
                    <MyMessage data={item} />
                  </>
                ) : (
                  <MessageUser user={this.props.userSelected} data={item} />
                )}
              </>
            ))}
          </div>
        );
      }
    } else {
      return <div id="chat-message-list"></div>;
    }
  }
}

export default MessageList;
