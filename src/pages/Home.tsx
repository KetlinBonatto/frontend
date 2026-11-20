
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import TestimonialCard from "../components/TestimonialCard";
import { useTheme } from "../contexts/ThemeContext";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

export default function Home() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <h1 className="logo">DonaFrost</h1>

                    <ul className="flex items-center gap-1.5">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#solution">Soluções</a></li>
                        <li><a href="#depoimentos">Depoimentos</a></li>
                        <li><a href="#precos">Planos e preços</a></li>
                    </ul>

                    <div className="flex items-center">
                        <button
                            type="button"
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Alternar tema"
                            title="Alternar tema"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <Link to="/login" className="reverse-color ml-lg">
                            Login
                        </Link>

                        <Link to="/cadastro" className="reverse-color ml-lg">
                            Cadastre-se
                        </Link>
                    </div>
                </nav>
            </header>

            <section id="hero">
                <div className="container content">
                    <p>Olá! Seja bem-vindo à DonaFrost.</p>

                    <h2>
                        Comida caseira direto no seu apê, é só pedir que entregamos para você!
                    </h2>

                    <p>
                        Já pensou em aproveitar uma refeição saborosa e preparada com carinho?
                        Conheça nossas opções e escolha sua favorita.
                    </p>

                    <div className="flex items-center gap-1">
                        <Link to="/cadastro">
                            <Button text="Cadastre-se" />
                        </Link>

                        <a href="#solution">
                            <Button text="Veja mais" secondary />
                        </a>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Nossas soluções</h2>

                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>

                    <p>
                        Temos opções deliciosas para deixar sua rotina
                        mais prática e saborosa!
                    </p>
                </header>

                <section className="even-columns">
                    <div className="card">
                        <span>
                            <span className="solution-icon">🍲</span>
                        </span>

                        <div>
                            <h3>Refeições caseiras</h3>
                            <p>
                                Comida preparada com carinho para deixar
                                seu dia a dia mais gostoso.
                            </p>
                            <hr />
                        </div>

                        <Link to="/solucoes/1">Saiba mais</Link>
                    </div>

                    <div className="card">
                        <span>
                            <span className="solution-icon">⏰</span>
                        </span>

                        <div>
                            <h3>Praticidade</h3>
                            <p>
                                Refeições prontas para facilitar sua rotina
                                e economizar seu tempo.
                            </p>
                            <hr />
                        </div>

                        <Link to="/solucoes/2">Saiba mais</Link>
                    </div>

                    <div className="card">
                        <span>
                            <span className="solution-icon">🏠</span>
                        </span>

                        <div>
                            <h3>Entrega em casa</h3>
                            <p>
                                Receba seus pedidos no conforto da sua casa.
                            </p>
                            <hr />
                        </div>

                        <Link to="/solucoes/3">Saiba mais</Link>
                    </div>
                </section>
            </section>

            <section id="depoimentos">
                <div className="container content">
                    <h2>O que nossos clientes dizem</h2>

                    <p>
                        Quem experimenta a DonaFrost sempre tem algo
                        gostoso para compartilhar!
                    </p>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p>
                                "Comida muito saborosa! Parece comida feita
                                em casa. Adorei!"
                            </p>
                            <h3>Mariana S.</h3>
                            <span>Cliente DonaFrost</span>
                        </div>

                        <div className="testimonial-card">
                            <p>
                                "A praticidade é maravilhosa. Consigo ter
                                refeições gostosas mesmo nos dias corridos."
                            </p>
                            <h3>Camila R.</h3>
                            <span>Cliente DonaFrost</span>
                        </div>

                        <div className="testimonial-card">
                            <p>
                                "Gostei muito da qualidade e do carinho
                                no preparo das refeições."
                            </p>
                            <h3>Juliana M.</h3>
                            <span>Cliente DonaFrost</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Opinião de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>

                    <p>
                        Queremos que cada refeição seja uma experiência especial.
                        Confira o espaço reservado para as opiniões dos nossos clientes.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            name="Cliente DonaFrost"
                            role="Cliente"
                            testimony="Adorei as refeições! São práticas, saborosas e facilitam muito minha rotina."
                            rating={5}
                        />
                    </div>
                </section>
            </section>
            <Pricing />

            <Contact />

            <TaskList />

            <Footer />
        </>
    );
}
