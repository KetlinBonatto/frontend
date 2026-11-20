import "../styles/pricing.css";

const plans = [
    {
        name: "Plano Básico",
        price: "R$ 99,90",
        description: "Para quem deseja praticidade no dia a dia.",
        features: [
            "5 refeições por mês",
            "Comida caseira",
            "Entrega programada"
        ]
    },
    {
        name: "Plano Família",
        price: "R$ 179,90",
        description: "Mais refeições para compartilhar bons momentos.",
        features: [
            "10 refeições por mês",
            "Comida caseira",
            "Entrega programada",
            "Variedade de pratos"
        ]
    },
    {
        name: "Plano Completo",
        price: "R$ 249,90",
        description: "Praticidade para toda a sua rotina.",
        features: [
            "15 refeições por mês",
            "Comida caseira",
            "Entrega programada",
            "Variedade de pratos"
        ]
    }
];

export default function Pricing() {
    return (
        <section id="precos" className="pricing-section">
            <div className="container">
                <header className="pricing-header">
                    <span>Nossos planos</span>
                    <h2>Escolha o melhor para você</h2>
                    <p>
                        Temos opções para facilitar sua rotina
                        com refeições saborosas e práticas.
                    </p>
                </header>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <article className="pricing-card" key={plan.name}>
                            <h3>{plan.name}</h3>

                            <p className="pricing-description">
                                {plan.description}
                            </p>

                            <p className="pricing-price">
                                {plan.price}
                                <span>/mês</span>
                            </p>

                            <ul>
                                {plan.features.map((feature) => (
                                    <li key={feature}>✓ {feature}</li>
                                ))}
                            </ul>

                            <a href="#contato" className="pricing-button">
                                Quero esse plano
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}