import React from "react";
import styled from "styled-components";
const SearchContainer = styled.div`
  display: grid;
  align-items: center;
  grid-area: search-container;
  padding: 0 20px;
  border-radius: 10px 0 0 0;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
  z-index: 1;
  background: #EDEDED;
`;
const SearchContainerInput = styled.input`
  color: black;
  outline: none;
  font-weight: bold;
  border-radius: 30px;
  height: 30px;
  border: 0;
  padding-left: 40px;
  padding-right: 20px;
  font-size: 1.4rem;
  background: url("../../images/search/search.svg") no-repeat
    rgba(27, 26, 26, 0.1);
  background-position: 15px center;
  background-size: 20px 20px;
  @media (max-width: 376px) {
    width: 100%;
  }
`;
class ChatSearch extends React.Component {
  render() {
    return (
      <SearchContainer>
        <SearchContainerInput
          type="text"
          placeholder="Procurar"
          onChange={(e) => this.props.change(e.target.value)}
        />
      </SearchContainer>
    );
  }
}
export default ChatSearch;