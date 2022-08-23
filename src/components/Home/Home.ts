import styled from "styled-components";
const Home = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  .infosUser {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 0.2px solid #414141;
    border-top: 0.2px solid #414141;
  }
  .infosUser p {
    font-size: 0.9rem;
    color: #7c7c7c;
  }
  .infosApp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.6rem;
      margin-left: 30px;
    }
  }
  .containerTitleTech {
    display: flex;
    width: 90%;
    margin-top: 15px;
    justify-content: space-between;
  }
  .deleteBtn {
    font-size: 1.5rem;
  }
  .deleteBtn:hover {
    cursor: pointer;
    color: red;
  }
  .containerTech {
    width: 90%;
    height: auto;
    background: #212529;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .containerTitleTech p {
    font-size: 1rem;
    margin-right: 20px;
  }
  .cardTech {
    display: grid;
    background: #121214;
    grid-template-columns: 50% 30% 10%;
    align-items: center;
    border-radius: 4px;
    width: 98%;
    height: 80%;
    margin: 5px;
    justify-content: space-between;
  }
  .cardTech:hover {
    background: #343b41;
  }
  .cardTech p {
    font-size: 1.1rem;
  }
  .cardTech h3 {
    margin-left: 2em;
  }
  @media (min-width: 800px) {
    .infosUser {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 150px;
    }
  }
`;

export default Home;
