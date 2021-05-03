import React from "react";
import "./Sendinput.css";
import enviar from "../../images/search/enviar.png";

class SendInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.message(this.state.value)
    this.setState({value: ''});

  }

  render() {
    return (
      <div id="send-input">
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Digita uma mensagem" />
        <button type="submit">
          <img src={enviar} width="50" alt="Enviar" />
        </button>
        </form>
      </div>
    );
  }
}

export default SendInput;