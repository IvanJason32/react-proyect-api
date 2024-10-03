import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null)
    axios
      .post("https://reqres.in/api/login", usuario)
      .then((data) => {
        setCargando(false);
        localStorage.setItem("tokenLogin", data.data.token);
        navigate("/");
      })
      .catch((e) => {
        setCargando(false);
        setError(e.response.data.error);
        console.log(e.response.data.error);
      });
  };

  if (localStorage.getItem("tokenLogin")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            required
            onChange={(e) => {
              setUsuario({
                ...usuario,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUsuario({
                ...usuario,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            className="link"
            type="submit"
            value={cargando ? "cargando..." : "Ingresar"}
          />
        </div>
      </form>
      {
        error && <span className="error">{error}</span>
      }
    </div>
  );
};

export default Login;
