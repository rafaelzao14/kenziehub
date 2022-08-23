import React, { useContext } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../Providers/Auth";
import CSS from "csstype";

interface iClose {
  subtitle: string | undefined;
  style: CSS.Properties;
}

function ModalClose() {
  let subtitle: iClose;
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(18, 18, 20, 0.9)",
    },
    content: {
      width: "50%",
      maxWidth: "300px",
      minWidth: "250px",
      height: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1px",
      backgroundColor: "#212529",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      duration: "3",
      transform: "translate(-50%, -50%)",
    } as React.CSSProperties,
  };
  const { setUser } = useContext(ContextAuth);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function hardExit() {
    localStorage.clear();
    navigate("/", { replace: true });
    setUser(false);
    closeModal();
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btnOpenExit" onClick={openModal}>
        Sair
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="containerClose">
          <button onClick={closeModal}>X</button>
        </div>
        <p>Tem certeza que deseja sair?</p>
        <div className="containerOptions">
          <Link to="/" replace onClick={hardExit}>
            Sim
          </Link>
          <button onClick={closeModal}>Continuar</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalClose;
