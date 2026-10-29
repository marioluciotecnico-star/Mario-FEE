import { useState } from 'react'
import './App.css'

const PERFIS = [
  {
    id: 1,
    nome: 'Sukuna',
    cargo: 'O rei das maldições',
    foto: 'https://i.pinimg.com/564x/af/9f/4a/af9f4ae25d2a2c46870f725847396957.jpg',
    bio: '.',
    github: 'https://github.com/marioluciotecnico-star',
    linkedin: 'https://www.linkedin.com/in/mario-lucio-33235b403/',
    curtidasIniciais: 0,
  },
  {
    id: 2,
    nome: 'Gojo',
    cargo: 'O mais foda aqui',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHuY0yylO72Ic-gACmK-THeYGuMpU2uBdIRwDdzPISRsCCHrCe3Wj12M&s=10',
    bio: '.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    curtidasIniciais: 5,
  },
  {
    id: 3,
    nome: 'Gojo x sukuna ',
    cargo: 'Luta de milhões',
    foto: 'https://uploads.spiritfanfiction.com/historias/capas/202104/imagine-sukuna-x-leitora-x-gojo-22178159-260420210145.jpg',
    bio: '.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    curtidasIniciais: 5,
  },
]

const COMENTARIOS_FIXADOS_ALEATORIOS = [
  {
    nome: 'Lucas Andrade',
    foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    texto: 'Primeiro a curtir! Esse projeto está ficando excelente.',
    tempo: 'Agora mesmo',
  },
  {
    nome: 'Beatriz Lima',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    texto: 'Que efeito incrível! Adorei a combinação de cores e animações.',
    tempo: 'Há 1 min',
  },
  {
    nome: 'Rafael Torres',
    foto: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100',
    texto: 'Mais uma curtida garantida! O componente está super responsivo.',
    tempo: 'Há 3 min',
  },
  {
    nome: 'Camila Rocha',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
    texto: 'Incrível ver a evolução do perfil! Parabéns pelo trabalho.',
    tempo: 'Há 5 min',
  },
  {
    nome: 'Thiago Mendes',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    texto: 'Design impecável! Muito bom ver códigos limpos assim.',
    tempo: 'Há 8 min',
  },
  {
    nome: 'Fernanda Souza',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    texto: 'Interface muito limpa e intuitiva, deixou o layout incrível!',
    tempo: 'Há 12 min',
  },
  {
    nome: 'Gabriel Oliveira',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    texto: 'Top demais! O modo escuro combinou muito com o estilo neon.',
    tempo: 'Há 15 min',
  },
  {
    nome: 'Larissa Martins',
    foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
    texto: 'Acompanhando a evolução! Muito sucesso no aprendizado de React.',
    tempo: 'Há 20 min',
  },
  {
    nome: 'Bruno Carvalho',
    foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100',
    texto: 'Componentização nota 10. Ficou super organizado!',
    tempo: 'Há 25 min',
  },
  {
    nome: 'Vanessa Dias',
    foto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
    texto: 'Achei super dinâmico o botão de curtir com interação imediata.',
    tempo: 'Há 30 min',
  },
]

function ProfileCard({ perfil }) {
  const [curtidas, setCurtidas] = useState(perfil.curtidasIniciais)
  const [showMore, setShowMore] = useState(false)
  const [fixadoAtual, setFixadoAtual] = useState(COMENTARIOS_FIXADOS_ALEATORIOS[0])
  const [animate, setAnimate] = useState(false)
  const [textoResposta, setTextoResposta] = useState('')
  const [respostaEnviada, setRespostaEnviada] = useState('')

  const handleCurtir = () => {
    setCurtidas((prev) => prev + 1)

    let novoIndex
    do {
      novoIndex = Math.floor(Math.random() * COMENTARIOS_FIXADOS_ALEATORIOS.length)
    } while (
      COMENTARIOS_FIXADOS_ALEATORIOS[novoIndex].nome === fixadoAtual.nome &&
      COMENTARIOS_FIXADOS_ALEATORIOS.length > 1
    )

    setFixadoAtual(COMENTARIOS_FIXADOS_ALEATORIOS[novoIndex])
    setRespostaEnviada('')

    setAnimate(true)
    setTimeout(() => setAnimate(false), 400)
  }

  const handleToggleDetails = () => setShowMore((prev) => !prev)

  const handleEnviarResposta = (e) => {
    e.preventDefault()
    if (textoResposta.trim() === '') return
    setRespostaEnviada(textoResposta)
    setTextoResposta('')
  }

  return (
    <section className="card">
      <div className="avatar">
        <img src={perfil.foto} alt={`Foto de perfil de ${perfil.nome}`} />
      </div>

      <h1 className="nome">{perfil.nome}</h1>
      <p className="cargo">{perfil.cargo}</p>

      <div className={`comentario-fixado ${animate ? 'animar' : ''}`}>
        <div className="tag-fixado-wrapper">
          <span className="tag-fixado">Última Curtida</span>
          <span className="tempo-fixado">{fixadoAtual.tempo}</span>
        </div>

        <div className="autor-fixado">
          <img
            src={fixadoAtual.foto}
            alt={`Foto de ${fixadoAtual.nome}`}
            className="foto-fixado"
          />
          <div className="info-autor-fixado">
            <h4>{fixadoAtual.nome}</h4>
            <p className="texto-fixado">"{fixadoAtual.texto}"</p>
          </div>
        </div>

        {respostaEnviada && (
          <div className="resposta-container">
            <span className="tag-resposta">Sua resposta:</span>
            <p className="texto-resposta">{respostaEnviada}</p>
          </div>
        )}

        <form onSubmit={handleEnviarResposta} className="form-resposta">
          <input
            type="text"
            placeholder="Responder comentário..."
            value={textoResposta}
            onChange={(e) => setTextoResposta(e.target.value)}
            className="input-resposta"
          />
          <button type="submit" className="botao-enviar-resposta">
            Enviar
          </button>
        </form>
      </div>

      {curtidas > 0 && (
        <div className="curtidas">
          <span className="icone-coracao">❤</span>
          <span>
            {curtidas} {curtidas === 1 ? 'Curtida' : 'Curtidas'}
          </span>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <button
          type="button"
          className="botao-curtir"
          onClick={handleCurtir}
          aria-label="Curtir perfil"
        >
          <span className="icone-like">❤</span>
          Curtir
        </button>

        <button
          type="button"
          className="botao-curtir"
          onClick={handleToggleDetails}
          style={{ fontSize: '0.85rem', opacity: 0.9 }}
        >
          {showMore ? 'Ocultar' : 'Mostrar'} Detalhes
        </button>
      </div>

      {showMore && (
        <p className="subtitulo-comentarios" style={{ marginTop: '16px', textAlign: 'center' }}>
          {perfil.bio}
        </p>
      )}

      <div className="redes-sociais">
        <a
          href={perfil.github}
          target="_blank"
          rel="noopener noreferrer"
          className="botao-social github"
        >
          GitHub
        </a>

        <a
          href={perfil.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="botao-social linkedin"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default function App() {
  const [index, setIndex] = useState(0)

  const comentarios = [
    {
      id: 1,
      nome: 'Luna Julia',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Nw-qaenftjN1sxzASbX6j3SyXXvCVZjV7bSP4FLI5BRrRlwileK1V8Sh&s=10',
      estrelas: 5,
      texto: 'Visual do perfil, incrível.',
    },
    {
      id: 2,
      nome: 'Carlos Silva',
      foto: 'https://i.pinimg.com/originals/da/8c/c7/da8cc72bce3549bc1f69ea281b5dc73c.jpg',
      estrelas: 5,
      texto: 'Perfil muito bonito! Gostei do estilo moderno, das cores e dos efeitos visuais.',
    },
    {
      id: 3,
      nome: 'Mariana Costa',
      foto: 'https://focalizando.com.br/sites/default/files/2022-11/fotos-para-perfil-masculino-tres-dicas-fundamentais-para-transmitir-imagem-que-deseja.jpg',
      estrelas: 4,
      texto: 'Excelente trabalho! A página ficou organizada, bonita e fácil de navegar.',
    },
    {
      id: 4,
      nome: 'Felipe Alencar',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      estrelas: 5,
      texto: 'Trabalho exemplar! A utilização dos componentes do React ficou muito fluida.',
    },
    {
      id: 5,
      nome: 'Juliana Paes',
      foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      estrelas: 5,
      texto: 'Design super elegante e moderno. A paleta de cores escura ficou excelente!',
    },
    {
      id: 6,
      nome: 'Diego Fernandes',
      foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100',
      estrelas: 5,
      texto: 'Muito boa a estrutura do código. Fácil de ler e manter.',
    },
  ]

  const handleNext = () => {
    if (index < PERFIS.length - 1) setIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (index > 0) setIndex((prev) => prev - 1)
  }

  const perfilAtivo = PERFIS[index]

  return (
    <main className="container">
      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: '500' }}>
          Perfil ({index + 1} de {PERFIS.length})
        </p>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="button"
            className="botao-social github"
            onClick={handlePrev}
            disabled={index === 0}
          >
            Anterior
          </button>

          <button
            type="button"
            className="botao-social github"
            onClick={handleNext}
            disabled={index === PERFIS.length - 1}
          >
            Próximo
          </button>
        </div>
      </nav>

      <ProfileCard key={perfilAtivo.id} perfil={perfilAtivo} />

      <section className="comentarios">
        <div className="cabecalho-comentarios">
          <h2 className="titulo-comentarios">Comentários</h2>
          <p className="subtitulo-comentarios">Avaliações e opiniões sobre o perfil</p>
        </div>

        <div className="lista-comentarios">
          {comentarios.map((comentario) => (
            <article className="comentario-card" key={comentario.id}>
              <div className="comentario-cabecalho">
                <img
                  className="foto-comentario"
                  src={comentario.foto}
                  alt={`Foto de ${comentario.nome}`}
                  loading="lazy"
                />

                <div className="dados-comentario">
                  <h3>{comentario.nome}</h3>

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

              <p className="texto-comentario">{comentario.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}