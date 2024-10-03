import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h1>Pagina no encontrada</h1>
      <p>Regrese a la página principal</p>
      <Link to="/">Volver a la página principal</Link>
    </>
  );
};

export default Page404;
