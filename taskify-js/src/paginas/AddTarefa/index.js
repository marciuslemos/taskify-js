import { Cabecalho } from "../../componentes/Cabecalho";
import { CadastrarTarefa } from "../../componentes/CadastrarTarefa";
import { Rodape } from "../../componentes/Rodape";
import { useNavigate } from "react-router-dom";

export default function AddTarefa() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home');
  }

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column min-vh-100 justify-content-between">
          <Cabecalho showButtons={false} />
          <div className="flex-grow-1">
            <CadastrarTarefa />
            <button className="btn btn-secondary mt-3" onClick={handleGoBack}>Voltar</button>
          </div>
          <Rodape />
        </div>
      </div>
    </>
  );
}
