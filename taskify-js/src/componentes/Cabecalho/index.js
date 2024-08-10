import { Botao } from '../Botao';
import { useNavigate } from 'react-router-dom';

export function Cabecalho({ showButtons = true }) {
  const navigate = useNavigate();

  const handleAddTarefa = () => {
    navigate('/addTarefa');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="text-body-light">Gerenciador de Tarefas</h1>
          {showButtons && (
            <div>
              <Botao cor="success" nome="Adicionar Tarefa" onClick={handleAddTarefa} />
              <Botao cor="danger" nome="Fechar App" onClick={handleLogout} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}