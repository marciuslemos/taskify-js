export function Cartao({ id, titulo, descricao, lembrete, onDelete }) {
    return (
      <div className={` card my-2 style="width: 18rem; ${lembrete ? 'border border-success' : ''}`}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{titulo}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => onDelete(id)}></button>
          </div>
          <p className="card-text">{descricao}</p>
          {lembrete && <span className="text-success">&#x1F514;</span>}
        </div>
      </div>
    );
  }