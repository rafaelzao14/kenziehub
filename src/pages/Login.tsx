import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import FormLogin from "../components/FormLogin/FormLogin";
import Header from "../components/Header/Header";
import { ContextAuth } from "../Providers/Auth";
import { motion } from "framer-motion";

const Login = () => {
  const { register, handleSubmit, errors, onSubmit, user, setUser } =
    useContext(ContextAuth);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("id");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div>
        {user ? (
          <Navigate to="/Dashboard" />
        ) : (
          <div>
            <Header>
              <h3>Kenzie Hub</h3>
            </Header>

            <FormLogin onSubmit={handleSubmit(onSubmit)}>
              <h3>Login</h3>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                placeholder="Digite seu e-mail..."
                {...register("email")}
              />

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <button type="submit">Entrar</button>
              <p>Ainda não possui uma conta?</p>
              <Link to="/Register">Cadastre-se</Link>
            </FormLogin>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
