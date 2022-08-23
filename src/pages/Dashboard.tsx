import { useEffect, useState } from "react";
import api from "../services/api";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "../Providers/Auth";
import ModalTech from "../components/ModalTech/ModalTech";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import ModalClose from "../components/ModalClose/ModalClose";
import { motion } from "framer-motion";
import axios, { AxiosResponse } from "axios";

interface iTechs {
  title: string | "";
  status: string | "";
  id: string | "";
}

const Dash = () => {
  const { user, setUser, token } = useContext(ContextAuth);
  const userID: string = JSON.parse(localStorage.getItem("id") || "");
  const [infos, setInfos] = useState<any>([]);
  useEffect(() => {
    api
      .get<any>(`/users/${userID}`)
      .then((data) => {
        setInfos(data);
      })
      .catch((err) => console.error(err));
  }, [infos]);

  function deleteTech(id: string) {
    api
      .delete(`/users/techs/${id}`)
      .then((response) => toast.success("Deletado com Sucesso!"));
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <>
        {!user ? (
          <Navigate to="/" />
        ) : (
          <div>
            <Header>
              <h3>Kenzie Hub</h3>
              <ModalClose />
            </Header>

            <Home>
              {infos && (
                <div className="infosUser">
                  <h3>Olá, {infos.data?.name}! </h3>
                  <p>{infos.data?.course_module}</p>
                </div>
              )}
              <div className="infosApp">
                <div className="containerTitleTech">
                  <p>Tecnologias</p>
                  <ModalTech />
                </div>
                {infos.data?.techs.lenght === 0 ? (
                  <h4> Sem tecnologias no momento.</h4>
                ) : (
                  <ul className="containerTech">
                    {infos.data?.techs.map((tech: iTechs, index: string) => {
                      return (
                        <li className="cardTech" key={index}>
                          <h3>{tech.title}</h3>
                          <p>{tech.status}</p>
                          <RiDeleteBin6Line
                            className="deleteBtn"
                            onClick={() => deleteTech(tech.id)}
                          />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </Home>
          </div>
        )}
      </>
    </motion.div>
  );
};

export default Dash;
