import styled from "styled-components";

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #212529;
  border-radius: 3px;
  color: #fff;
  width: 80%;
  height: 380px;
  margin: 0 auto;
  input {
    outline: none;
    border: 1px solid #f8f9fa;
    border-radius: 3px;
    background: #343b41;
    height: 30px;
    width: 70%;
    color: #f8f9fa;
    margin-bottom: 10px;
  }
  label {
    display: flex;
    align-items: flex-start;
    width: 70%;
    font-size: 0.7rem;
    margin-bottom: 10px;
    color: #f8f9fa;
  }
  button {
    width: 72%;
    height: 45px;
    background: #ff577f;
    color: #fff;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  button:hover {
    background: #e9a9b8;
    cursor: pointer;
  }
  p {
    font-size: 0.6rem;
    margin-left: 15px;
    color: #868e96;
    margin-bottom: 17px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    background: #868e96;
    width: 72%;
    height: 45px;
  }
  a:hover {
    background: #b4bec9;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
  @media (min-width: 1280px) {
    margin-top: 200px;
    width: 40%;
  }
`;

export default FormLogin;
