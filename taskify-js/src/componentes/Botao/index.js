export function Botao({ cor, nome, onClick }) {
    return (
      <>
        <button type="button" className={`btn btn-${cor} btn-lg`} onClick={onClick}>
          {nome}
        </button>
      </>
    );
  }