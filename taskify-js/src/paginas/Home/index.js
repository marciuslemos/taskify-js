import { Cabecalho } from "../../componentes/Cabecalho";
import { Rodape } from "../../componentes/Rodape";
import { Tarefas } from "../../componentes/Tarefas";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column min-vh-100 justify-content-between">
          <Cabecalho />
          <div className="flex-grow-1">
            <Tarefas />
          </div>
          <Rodape />
        </div>
      </div>
    </>
  );
}