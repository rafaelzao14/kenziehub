import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dash from "./pages/Dashboard";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dash />} />
    </Routes>
  );
}

export default App;
