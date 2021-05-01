import React from "react";
import "./Sendinput.css";
import enviar from "../../images/search/enviar.png";

function SendInput() {
  return (
    <div id="send-input">
      <input type="text" placeholder="Digita uma mensagem" />
      <button>
        <img src={enviar} width="50" alt="Enviar" />
      </button>
    </div>
  );
}

export default SendInput;
