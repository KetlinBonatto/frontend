
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2>DonaFrost</h2>
                    <p>Comida caseira preparada com carinho e entregue para você.</p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>
                    <a href="#hero">Home</a>
                    <a href="#solution">Soluções</a>
                    <a href="#depoimentos">Depoimentos</a>
                    <a href="#contato">Contato</a>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>
                    <a href="mailto:contato@donafrost.com.br">
                        E-mail
                    </a>
                    <a href="#contato">Envie uma mensagem</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} DonaFrost. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

