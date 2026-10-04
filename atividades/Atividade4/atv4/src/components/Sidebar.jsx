function Sidebar() {
  const filmes = [
    "O Exorcista",
    "Invocação do Mal",
    "It: A Coisa",
    "Halloween",
    "Jogos Mortais"
  ];

  return (
    <aside>
      <h2>🎃 Filmes populares</h2>

      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>

      <h2>⭐ Minhas notas</h2>

      <ul>
        <li>O Exorcista - 9/10</li>
        <li>Invocação do Mal - 8,5/10</li>
        <li>It: A Coisa - 9/10</li>
        <li>Halloween - 8/10</li>
        <li>Jogos Mortais - 8,5/10</li>
      </ul>
    </aside>
  );
}

export default Sidebar;