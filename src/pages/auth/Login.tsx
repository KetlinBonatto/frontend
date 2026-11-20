
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function voltarInicio() {
        navigate("/");
    }

    return (
        <main className="login-page">
            <h1>Entrar no DonaFrost</h1>

            <p>Bem-vindo de volta!</p>

            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                    />
                </div>

                <button type="submit">Entrar</button>
            </form>

            <p>
                Ainda não tem conta?{" "}
                <Link to="/cadastro">Cadastre-se</Link>
            </p>

            <button type="button" onClick={voltarInicio}>
                Voltar para o início
            </button>
        </main>
    );
}
