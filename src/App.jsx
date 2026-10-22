import { useState } from 'react'
import './App.css'

function App() {
  const [curtidas, setCurtidas] = useState(0)

  const handleCurtir = () => {
    setCurtidas((valorAtual) => valorAtual + 1)
  }

  const comentarios = [
    {
      id: 1,
      nome: 'Luna Julia',
      foto: 'https://randomuser.me/api/portraits/women/68.jpg',
      estrelas: 5,
      texto:
        'Visual do perfil, incrivel.',
    },
    {
      id: 2,
      nome: 'Carlos Silva',
      foto: 'https://randomuser.me/api/portraits/men/32.jpg',
      estrelas: 5,
      texto:
        'Perfil muito bonito! Gostei do estilo moderno, das cores e dos efeitos visuais.',
    },
    {
      id: 3,
      nome: 'Mariana Costa',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg',
      estrelas: 4,
      texto:
        'Excelente trabalho! A página ficou organizada, bonita e fácil de navegar.',
    },
  ]

  return (
    <main className="container">

      <section className="card">

        <div className="avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KhyBAe72OOUZ6urcjtwYH2OvS1FkEBo8GhBhmp1cqvW5QMs9rSVJ7ZM&s=10"
            alt="Foto de perfil de Satoru Mario"
          />
        </div>

        <h1 className="nome">Satoru Mario</h1>
        <p className="cargo">Aprendendo front-end</p>

        {curtidas > 0 && (
          <div className="curtidas">
            <span className="icone-coracao">❤</span>

            <span>
              {curtidas}{' '}
              {curtidas === 1 ? 'Curtida' : 'Curtidas'}
            </span>
          </div>
        )}

        <button
          type="button"
          className="botao-curtir"
          onClick={handleCurtir}
          aria-label="Curtir perfil"
        >
          <span className="icone-like">❤</span>
          Curtir
        </button>


        <div className="redes-sociais">
          <a
            href="https://github.com/marioluciotecnico-star"
            target="_blank"
            rel="noopener noreferrer"
            className="botao-social github"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mario-lucio-33235b403/"
            target="_blank"
            rel="noopener noreferrer"
            className="botao-social linkedin"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="comentarios">

        <div className="cabecalho-comentarios">
          <h2 className="titulo-comentarios">Comentários</h2>

          <p className="subtitulo-comentarios">
            Avaliações e opiniões sobre o perfil
          </p>
        </div>

        {/* Lista dos comentários */}
        <div className="lista-comentarios">

          {/* Cria um cartão para cada comentário */}
          {comentarios.map((comentario) => (
            <article
              className="comentario-card"
              key={comentario.id}
            >

              <div className="comentario-cabecalho">
                <img
                  className="foto-comentario"
                  src={comentario.foto}
                  alt={`Foto de ${comentario.nome}`}
                  loading="lazy"
                />

                <div className="dados-comentario">
                  <h3>{comentario.nome}</h3>

                  {/* Estrelas da avaliação */}
                  <div
                    className="stars"
                    aria-label={`${comentario.estrelas} de 5 estrelas`}
                  >
                    <span className="estrelas-cheias">
                      {'★'.repeat(comentario.estrelas)}
                    </span>

                    <span className="estrelas-vazias">
                      {'★'.repeat(5 - comentario.estrelas)}
                    </span>
                  </div>
                </div>
              </div>

              <hr />

              <p className="texto-comentario">
                {comentario.texto}
              </p>
            </article>
          ))}

        </div>
      </section>
    </main>
  )
}

export default App