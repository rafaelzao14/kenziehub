import { createContext, ReactNode } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface iChildren {
  children?: ReactNode;
}

interface iForm {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  bio?: string;
  contact?: string;
}
interface iContextRegister {
  register?: any;
  errors?: any;
  token?: string;
  handleSubmit?: any;
  newRegister?: Function;
  navigate?: Function;
  yupResolver?: Function;
}

export const RegisterContext = createContext<iContextRegister>({});

const RegisterProv = ({ children }: iChildren) => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Apenas Letras")
      .required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Colocar um email válido"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "8 caracteres no mínimo, 1 Letra Maiúscula no mínimo, 1 Número no mínimo, 1 Símbolo no mínimo"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório"),

    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(schema),
  });
  function newRegister(object: any) {
    api
      .post("/users", object)
      .then((data) => toast.success("Cadastro feito com sucesso!"))
      .catch((err) => toast.error("Ops, algo de errado!"));

    navigate("/", { replace: true });
  }

  return (
    <RegisterContext.Provider
      value={{
        navigate,
        register,
        handleSubmit,
        errors,
        yupResolver,
        newRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProv;
