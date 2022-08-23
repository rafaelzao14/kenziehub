import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  color: #ff577f;
  button {
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    text-decoration: none;
    width: 40px;
    height: 25px;
    background: #4b4b4b;
    border-radius: 3px;
    border: none;
  }
  button:hover {
    background: #a2a2a2;
    cursor: pointer;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default Header;
