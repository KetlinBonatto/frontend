function Article({ titulo, autor, data, conteudo }) {
  return (
    <article id="inicio">

      <h2>{titulo}</h2>

      <p>
        <strong>Autor:</strong> {autor}
      </p>

      <p>
        <strong>Data:</strong> {data}
      </p>

      <p>{conteudo}</p>

      <section id="sobre">
        <h2>Sobre o blog</h2>

        <p>
          O Terror na Tela é um blog feito para quem gosta de filmes de terror,
          suspense e histórias assustadoras.
        </p>

        <p>
          Aqui eu vou falar um pouco sobre alguns filmes que considero
          interessantes, dando minha opinião sobre a história, os personagens
          e o nível de terror.
        </p>
      </section>

      <section id="filmes">
        <h2>Minhas críticas de filmes</h2>

        <div className="filme">
          <h3>O Exorcista</h3>
          <p>
            O Exorcista é um dos maiores clássicos do cinema de terror.
          </p>
          <p>
            Na minha opinião, uma das melhores coisas do filme é o clima de
            tensão.
          </p>
          <p className="nota">👻 Minha nota: 9/10</p>
        </div>

        <div className="filme">
          <h3>Invocação do Mal</h3>
          <p>
            Invocação do Mal conta a história de uma família que enfrenta
            acontecimentos sobrenaturais.
          </p>
          <p>
            Para mim, o ponto forte do filme é a maneira como ele constrói o
            suspense.
          </p>
          <p className="nota">🕯️ Minha nota: 8,5/10</p>
        </div>

        <div className="filme">
          <h3>It: A Coisa</h3>
          <p>
            It: A Coisa apresenta um grupo de crianças que enfrenta uma
            criatura que assume a forma de seus maiores medos.
          </p>
          <p className="nota">🎈 Minha nota: 9/10</p>
        </div>

        <div className="filme">
          <h3>Halloween</h3>
          <p>
            Halloween é um clássico importante para o gênero de terror.
          </p>
          <p className="nota">🎃 Minha nota: 8/10</p>
        </div>

        <div className="filme">
          <h3>Jogos Mortais</h3>
          <p>
            Jogos Mortais mistura suspense, mistério e terror.
          </p>
          <p className="nota">🩸 Minha nota: 8,5/10</p>
        </div>
      </section>

      <section id="video">
        <h2>🎥 Vídeo</h2>

        <p>
          Confira um trailer relacionado ao tema de filmes de terror:
        </p>

        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/hNCmb-4oXJA"
            title="Trailer de filme de terror"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="comentarios">
        <h2>👻 Deixe sua opinião</h2>

        <p>
          Você também gosta de filmes de terror? Preencha o formulário!
        </p>

        <form>
          <div className="campo">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="campo">
            <label htmlFor="filme">Qual é seu filme favorito?</label>

            <select id="filme">
              <option value="">Escolha um filme</option>
              <option value="exorcista">O Exorcista</option>
              <option value="invocacao">Invocação do Mal</option>
              <option value="it">It: A Coisa</option>
              <option value="halloween">Halloween</option>
              <option value="jogos-mortais">Jogos Mortais</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="comentario">Seu comentário:</label>

            <textarea
              id="comentario"
              rows="6"
              placeholder="Escreva sua opinião..."
            ></textarea>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="aceite" />
            <label htmlFor="aceite">
              Confirmo que as informações estão corretas.
            </label>
          </div>

          <button type="submit">Enviar comentário</button>
        </form>
      </section>

    </article>
  );
}

export default Article;