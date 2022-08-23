import NewRegister from "../components/NewRegister/NewRegister";
import Header from "../components/Header/Header";
import { useContext } from "react";
import { RegisterContext } from "../Providers/Register";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const { register, handleSubmit, errors, newRegister } =
    useContext(RegisterContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div>
        <Header>
          <h3>Kenzie Hub</h3>
        </Header>
        <NewRegister onSubmit={handleSubmit(newRegister)}>
          <h3>Cadastre-se</h3>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Digite aqui seu nome"
          />
          <span>{errors?.name?.message}</span>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Digite aqui seu e-mail"
          />
          <span>{errors?.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
          />
          <span>{errors?.password?.message}</span>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors?.confirmPassword?.message}</span>

          <label htmlFor="bio">Biografia</label>
          <textarea
            id="bio"
            {...register("bio")}
            placeholder="Fale sobre você"
          />
          <span>{errors?.bio?.message}</span>
          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            {...register("contact")}
            placeholder="Opção de contato"
          />
          <span>{errors?.contact?.message}</span>
          <select {...register("course_module")}>
            <option value="Primeiro Módulo (Iniciante)">
              Primeiro Módulo (Iniciante)
            </option>
            <option value="Segundo Módulo (Intermediário)">
              Segundo Módulo (Intermediário)
            </option>
            <option value="Terceiro Módulo (Avançado)">
              Terceiro Módulo (Avançado)
            </option>
          </select>
          <button type="submit">Cadastrar</button>
          <Link to="/">Ir para tela de Login</Link>
        </NewRegister>
      </div>
    </motion.div>
  );
};
export default Register;
