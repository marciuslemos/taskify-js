
export function Input() {
    return (
        <>
            <div className="mb-3">
                <label for="disabledTextInput" className="form-label">Adicionar Tarefa</label>
                <input type="text" id="disabledTextInput" className="form-control" placeholder="Add Tarefa" />
            </div>

            <div className="mb-3">
                <label for="disabledTextInput" className="form-label">Descrição</label>
                <input type="text" id="disabledTextInput" className="form-control" placeholder="Add Descrição" />
            </div>

            <div className="mb-3">
                <label htmlFor="datetimeInput" className="form-label">Adicionar Data e Hora</label>
                <input type="datetime-local" id="datetimeInput" className="form-control" />
            </div>



            <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault" >
                    Acionar Lembrete
                </label>
            </div>
        </>
    )
}