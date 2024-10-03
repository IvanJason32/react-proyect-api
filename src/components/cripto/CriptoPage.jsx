import { useParams } from "react-router-dom";
import "./CriptoPage.css";
import useFetch from "../../hooks/useFetch";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistory from "./info/CriptoHistory";

const CriptoPage = () => {
  const params = useParams();

  const [cripto, cargandoCripto] = useFetch(`assets/${params.id}`);
  const [history, cargandoHistory] = useFetch(`assets/${params.id}/history?interval=d1`);

  if(cargandoCripto || cargandoHistory) return <span>Cargando...</span>

  return (
    <>
      <div className="cripto-page-container">
        {cripto && <CriptoInfo cripto={cripto} />}
        {history && <CriptoHistory history={history} />}
      </div>
    </>
  );
};

export default CriptoPage;
