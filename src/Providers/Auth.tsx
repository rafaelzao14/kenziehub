import { createContext, ReactNode } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface iChildren {
  children?: ReactNode;
}

interface iLogin {
  email: string | "";
  password: string;
}

interface iContext {
  user: string;
  setUser: Function;
  register: any;
  errors: any;
  token: string;
  handleSubmit: Function;
  onSubmit: Function;
}
export const ContextAuth = createContext<iContext>({} as iContext);
const Auth = ({ children }: iChildren) => {
  const [user, setUser] = useState("");

  const token: string = localStorage.getItem("token") || "";

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function userOn() {
      try {
        const { data }: any = await api.get("/profile");

        setUser(data.id);
      } catch (error) {
        console.log(error);
      }
    }
    userOn();
  }, []);

  const onSubmit = async (data: any) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("id", JSON.stringify(response.data.user.id));
        navigate("/Dashboard", { replace: true });
        toast.success("Login Efetuado com Sucesso!");
      })
      .catch((err) => toast.error("Login ou senha inválidos!"));
  };

  return (
    <ContextAuth.Provider
      value={{ user, setUser, register, handleSubmit, errors, onSubmit, token }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export default Auth;
