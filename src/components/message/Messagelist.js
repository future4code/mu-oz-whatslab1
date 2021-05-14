import React from "react";
import "./Messagelist.css";
import enviar from "../../images/search/enviar.png";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], message: "", userSelected: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  onUserSelected(user) {
    this.setState({ userSelected: user });
  }

  handleSubmit(event) {
    event.preventDefault();
    const novoMenssagem = {
      message: this.state.message,
      userTyping: this.state.userSelected,
      time: Date().split(" ")[4],
      userSelected: this.props.user.nome
    };

    this.setState({
      messages: [...this.state.messages, novoMenssagem],
      message: "",
    });
  }

  deletarMenssagem = (time) => {
    const copiaListaMenssagem = [...this.state.messages];

    const menssagemsFiltrados = copiaListaMenssagem.filter(
      (menssagem) => menssagem.time !== time
    );

    this.setState({ messages: menssagemsFiltrados });
  };

  render() {
    let messages = [...this.state.messages].reverse();
    if (messages.length > 0){
      if (messages[0].userSelected !== this.props.user.nome) {
        this.setState({messages: []})
      }
    }
    return (
      <>
        <div id="chat-message-list">
          {messages.map((item) => (
            <>
              {item.userTyping === "me" ? (
                <div className="message-row you-message">
                  <div className="message-content">
                    <div
                      className="message-text"
                      onDoubleClick={() => this.deletarMenssagem(item.time)}
                    >
                      <p>Eu:</p> {item.message}
                    </div>
                    <div className="message-time">{item.time}</div>
                  </div>
                </div>
              ) : (
                <div className="message-row other-message">
                  <div className="message-content">
                    <img src={this.props.user.image} alt="" />
                    <div
                      className="message-text"
                      onDoubleClick={() => this.deletarMenssagem(item.time)}
                    >
                      {item.message}
                    </div>
                    <div className="message-time">{item.time}</div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <div id="send-input">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Digita uma mensagem"
            />
            <button type="submit">
              <img src={enviar} width="50" alt="Enviar" />
            </button>
          </form>
        </div>
        <div id="new-message-container">
          <div
            className="message"
            onClick={(e) => this.onUserSelected(e.target.value)}
          >
            <input type="radio" id="me" name="user" value="me" />
            <label for="me">Eu</label>
            <input type="radio" id="other" name="user" value="other" />
            <label for="other">{this.props.user.nome}</label>
          </div>
        </div>
      </>
    );
  }
}

export default MessageList;
