import styled from "styled-components";

const NewRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #212529;
  border-radius: 3px;
  color: #e2e2e2;
  width: 80%;
  height: 480px;
  margin: 0 auto;
  input,
  textarea {
    outline: none;
    border-radius: 3px;
    background: #343b41;
    height: 50px;
    width: 72%;
    color: #f8f9fa;
    margin-bottom: 10px;
  }
  select {
    outline: none;
    border-radius: 3px;
    background: #343b41;
    height: 50px;
    width: 73%;
    color: #f8f9fa;
    margin-bottom: 10px;
    font-size: 0.7rem;
  }
  label {
    display: flex;
    width: 72%;
    font-size: 0.7rem;
  }
  button {
    background: #ff577f;
    display: flex;
    width: 72%;
    justify-content: center;
    align-items: center;
    height: 60px;
    border: none;
    border-radius: 3px;
    color: #fff;
    margin-bottom: 15px;
  }
  button:hover {
    cursor: pointer;
    background: #a76f82;
  }
  a {
    text-decoration: none;
    color: #9e9e9e;
    font-size: 0.8rem;
    margin-bottom: 3px;
  }
  a:hover {
    color: #fff;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
`;

export default NewRegister;
