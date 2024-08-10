import { Cabecalho } from "../../componentes/Cabecalho";
import { Rodape } from "../../componentes/Rodape";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <>
      <Cabecalho showButtons={false} />
      <div className="container form-signin w-100 my-5">
        <div className="row justify-content-center">
          <form className="col-lg-4 col-md-8 col-10" onSubmit={handleLogin}>
            <h1 className="h3 mb-3 fw-normal">Insira suas credenciais</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
              <label htmlFor="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
              <label htmlFor="floatingPassword">Senha</label>
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" defaultChecked={true} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Mantenha-me conectado
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Acessar</button>
          </form>
        </div>
      </div>
      <Rodape />
    </>
  );
}