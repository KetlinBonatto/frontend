
import { useState, type FormEvent } from "react";
import "../styles/contact.css";

export default function Contact() {
    const [enviando, setEnviando] = useState(false);
    const [retorno, setRetorno] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const dados = new FormData(form);

        const mensagem = {
            nome: dados.get("nome"),
            email: dados.get("email"),
            mensagem: dados.get("mensagem")
        };

        setEnviando(true);
        setRetorno("");

        try {
            const resposta = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mensagem)
            });

            const resultado = await resposta.json();

            if (!resposta.ok) {
                throw new Error(resultado.error || "Erro ao enviar.");
            }

            setRetorno("Mensagem enviada com sucesso!");
            form.reset();

        } catch (error) {
            setRetorno(
                error instanceof Error
                    ? error.message
                    : "Não foi possível enviar a mensagem."
            );
        } finally {
            setEnviando(false);
        }
    }

    return (
        <section id="contato" className="contact-section">
            <div className="container">
                <header className="contact-header">
                    <span>Entre em contato</span>
                    <h2>Vamos conversar?</h2>
                    <p>
                        Ficou com alguma dúvida ou deseja conhecer
                        melhor a DonaFrost? Envie uma mensagem!
                    </p>
                </header>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        required
                    />

                    <textarea
                        name="mensagem"
                        placeholder="Escreva sua mensagem"
                        rows={5}
                        required
                    />

                    <button type="submit" disabled={enviando}>
                        {enviando ? "Enviando..." : "Enviar mensagem"}
                    </button>

                    {retorno && <p role="status">{retorno}</p>}
                </form>
            </div>
        </section>
    );
}
