
import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
        <main className="login-page">
            <h1>Criar conta no DonaFrost</h1>

            <p>Faça seu cadastro para conhecer nossas soluções!</p>

            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                    />
                </div>

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
                        placeholder="Crie uma senha"
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>

            <p>
                Já tem uma conta?{" "}
                <Link to="/login">Faça login</Link>
            </p>

            <Link to="/">Voltar para o início</Link>
        </main>
    );
}
