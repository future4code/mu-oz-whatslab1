import React from "react";
import styled from "styled-components";

const TitleChat = styled.div`
display: flex;
align-content: center;
align-items: center;
grid-area: chat-title;
color: black;
background: #EDEDED;
font-weight: bold;
font-size: 2rem;
box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
padding: 0 20px;
`;

const ImgTitleChat = styled.img`
cursor: pointer;
width: 8%;
border-radius: 90%;
padding: 10px;
`;

function ChatTitle(props) {
  return (
    <TitleChat>
      <span>{props.user.nome}</span>
      <ImgTitleChat src={props.user.image} alt={props.user.nome}/>
    </TitleChat>
  );
}

export default ChatTitle;
