import "./Cuadricula.css";
import Cripto from "./cripto/Cripto";
import useFetch from "../hooks/useFetch";

function Cuadricula() {
  const [criptos, cargandoCriptos] = useFetch("assets");

  if (cargandoCriptos) return <span>Cargando...</span>;

  return (
    <>
      <div className="app-container">
        <h1>Lista de criptomonedas</h1>
        <div className="cripto-container">
          {criptos &&
            criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
              <Cripto
                key={id}
                symbol={symbol}
                name={name}
                priceUsd={priceUsd}
                changePercent24Hr={changePercent24Hr}
                id={id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Cuadricula;
