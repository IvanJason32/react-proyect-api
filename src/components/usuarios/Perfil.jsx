import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () => {

  const usuario = useContext(UserContext)

  return (
    <div>
      <h1>Perfil de {usuario.name}</h1>
      <p>Usuario registrado desde: {usuario.registered}</p>
    </div>
  )
}

export default Perfil;