import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import CSS from "csstype";

interface iClose {
  subtitle: string | undefined;
  style: CSS.Properties;
}
interface iForm {
  title: string;
  status: string;
}
function ModalTech() {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(18, 18, 20, 0.9)",
    },
    content: {
      width: "80%",
      maxWidth: "500px",
      height: "40%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1px",
      backgroundColor: "#212529",
      boxShadow: "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
      borderRadius: "4px",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      initial: "opacity: 0",
      animate: "opacity: 1",
      exit: "opacity: 0",
      transition: "3",
      transform: "translate(-50%, -50%)",
    } as React.CSSProperties,
  };
  const { register, handleSubmit } = useForm<iForm>();

  let subtitle: iClose;
  const [modalIsOpen, setIsOpen] = useState(false);

  async function addTech(data: any) {
    await api
      .post("/users/techs", data)
      .then((response) => {
        toast.success("Tecnologia adicionada com sucesso!!");
        closeModal();
      })
      .catch((err) => {
        toast.error("Ops, Algo errado!!!");
        console.log(err);
      });
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btnOpen" onClick={openModal}>
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="headerModalTech">
          <p>Cadastrar Tecnologia</p>
          <button onClick={closeModal}>X</button>
        </div>

        <form
          className="formModal"
          onSubmit={handleSubmit((data) => addTech(data))}
        >
          <label htmlFor="title">Nome tecnologia</label>
          <input type="text" id="title" {...register("title")} />
          <label>Selecione o nível</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button>Cadastrar Tecnologia</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalTech;
