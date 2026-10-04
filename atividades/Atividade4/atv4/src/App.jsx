import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const post = {
    titulo: "Bem-vindo ao Terror na Tela!",
    autor: "Ketlin",
    data: "03/10/2026",
    conteudo:
      "Aqui você encontra críticas e opiniões sobre alguns dos filmes de terror mais conhecidos."
  };

  return (
    <>
      <Header />

      <Navigation />

      <main>
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />

        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;