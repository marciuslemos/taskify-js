import { useState } from 'react';
import { Cartao } from '../Cartao';
import { TAREFAS } from '../../mocks/tarefas';

export function Tarefas() {
  const [tarefas, setTarefas] = useState(TAREFAS);

  const deleteTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <>
      {tarefas.map(tarefa => (
        <Cartao 
          key={tarefa.id}
          id={tarefa.id}
          titulo={tarefa.titulo}
          descricao={tarefa.descricao}
          lembrete={tarefa.lembrete}
          onDelete={deleteTarefa}
        />
      ))}
    </>
  );
}
