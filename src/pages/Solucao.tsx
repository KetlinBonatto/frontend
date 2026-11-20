
import { Link, useParams } from "react-router-dom";

const solucoes = [
    {
        id: "1",
        nome: "Refeições caseiras",
        descricao: "Comida preparada com carinho para deixar seu dia mais gostoso."
    },
    {
        id: "2",
        nome: "Praticidade",
        descricao: "Refeições prontas para facilitar sua rotina."
    },
    {
        id: "3",
        nome: "Entrega em casa",
        descricao: "Receba seus pedidos no conforto da sua casa."
    }
];

export default function Solucao() {
    const { id } = useParams();

    const solucao = solucoes.find(item => item.id === id);

    if (!solucao) {
        return (
            <main>
                <h1>Solução não encontrada</h1>
                <Link to="/">Voltar para o início</Link>
            </main>
        );
    }

    return (
        <main>
            <h1>{solucao.nome}</h1>
            <p>{solucao.descricao}</p>

            <Link to="/">Voltar para o início</Link>
        </main>
    );
}
