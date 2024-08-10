import { useState } from 'react';

export function CadastrarTarefa() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [lembrete, setLembrete] = useState(false);

  const handleSave = () => {
    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      dataHora,
      lembrete
    };

    const tarefasExistentes = JSON.parse(sessionStorage.getItem('tarefas')) || [];

    
    const novasTarefas = [...tarefasExistentes, novaTarefa];

    
    sessionStorage.setItem('tarefas', JSON.stringify(novasTarefas));

    setTitulo('');
    setDescricao('');
    setDataHora('');
    setLembrete(false);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <form className="col-lg-6 col-md-8 col-10 bg-light p-4 rounded" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="tituloInput" className="form-label">Adicionar Tarefa</label>
            <input
              type="text"
              id="tituloInput"
              className="form-control"
              placeholder="Add Tarefa"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="descricaoInput" className="form-label">Descrição</label>
            <input
              type="text"
              id="descricaoInput"
              className="form-control"
              placeholder="Add Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="datetimeInput" className="form-label">Adicionar Data e Hora</label>
            <input
              type="datetime-local"
              id="datetimeInput"
              className="form-control"
              value={dataHora}
              onChange={(e) => setDataHora(e.target.value)}
            />
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={lembrete}
              onChange={(e) => setLembrete(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Acionar Lembrete
            </label>
          </div>

          <button type="button" className="btn btn-dark" onClick={handleSave}>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
