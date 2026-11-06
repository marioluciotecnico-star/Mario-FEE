import { useState } from 'react'
import './App.css'

const PERFIS = [
  {
    id: 1,
    nome: 'Sukuna',
    cargo: 'O rei das maldições',
    foto: 'https://i.pinimg.com/564x/af/9f/4a/af9f4ae25d2a2c46870f725847396957.jpg',
    bio: 'Rei das maldições da era Heian.',
    github: 'https://github.com/marioluciotecnico-star',
    linkedin: 'https://www.linkedin.com/in/mario-lucio-33235b403/',
    curtidasIniciais: 0,
  },
  {
    id: 2,
    nome: 'Gojo',
    cargo: 'O mais foda aqui',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHuY0yylO72Ic-gACmK-THeYGuMpU2uBdIRwDdzPISRsCCHrCe3Wj12M&s=10',
    bio: 'O feiticeiro mais forte da atualidade.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    curtidasIniciais: 5,
  },
  {
    id: 3,
    nome: 'Gojo x Sukuna',
    cargo: 'Luta de milhões',
    foto: 'https://uploads.spiritfanfiction.com/historias/capas/202104/imagine-sukuna-x-leitora-x-gojo-22178159-260420210145.jpg',
    bio: 'O confronto definitivo entre os mais fortes.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    curtidasIniciais: 5,
  },
]

const IMAGENS_GALERIA = [
  { id: 1, url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600', legenda: 'Estátua Clássica em Mármore' },
  { id: 2, url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600', legenda: 'Arte Antiga e Escultura' },
  { id: 3, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600', legenda: 'Vista Panorâmica da Montanha' },
  { id: 4, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600', legenda: 'Paisagem Natural e Horizonte' },
  { id: 5, url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600', legenda: 'Estátua Monumental Iluminada' },
  { id: 6, url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600', legenda: 'Vista Noturna da Cidade Famosa' },
  { id: 7, url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600', legenda: 'Escultura Detalhada em Bronze' },
  { id: 8, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600', legenda: 'Vale Verde e Vista Aberta' },
  { id: 9, url: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600', legenda: 'Busto Esculpido Histórico' },
  { id: 10, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600', legenda: 'Vista Paradisíaca do Oceano' },
  { id: 11, url: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=600', legenda: 'Monumento e Arquitetura Antiga' },
]

const PRODUTOS_DIGITAIS = [
  { id: 1, titulo: 'Workstation Pro Developer', descricao: 'Ambiente de desenvolvimento otimizado para alta performance.', preco: 'R$ 149,90', imagem: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400' },
  { id: 2, titulo: 'Masterclass Setup Fullstack', descricao: 'Guia definitivo e prático para configurar o seu PC.', preco: 'R$ 89,90', imagem: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400' },
  { id: 3, titulo: 'Kit Produtividade Extrema', descricao: 'Softwares e atalhos essenciais para turbinar o seu dia a dia.', preco: 'R$ 59,90', imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400' },
]

const COMENTARIOS_FIXADOS_ALEATORIOS = [
  { nome: 'Lucas Andrade', foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', texto: 'Primeiro a curtir! Esse projeto está excelente.', tempo: 'Agora mesmo' },
  { nome: 'Beatriz Lima', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', texto: 'Que efeito incrível! Adorei as animações.', tempo: 'Há 1 min' },
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
    const novoIndex = Math.floor(Math.random() * COMENTARIOS_FIXADOS_ALEATORIOS.length)
    setFixadoAtual(COMENTARIOS_FIXADOS_ALEATORIOS[novoIndex])
    setRespostaEnviada('')
    setAnimate(true)
    setTimeout(() => setAnimate(false), 400)
  }

  const handleEnviarResposta = (e) => {
    e.preventDefault()
    if (textoResposta.trim() === '') return
    setRespostaEnviada(textoResposta)
    setTextoResposta('')
  }

  return (
    <section className="card">
      <div className="avatar">
        <img src={perfil.foto} alt={`Foto de ${perfil.nome}`} />
      </div>
      <h1 className="nome">{perfil.nome}</h1>
      <p className="cargo">{perfil.cargo}</p>

      {/* Mensagem condicional exigida para curtidas > 5 */}
      {curtidas > 5 && <h2 className="destaque-tecinfo" style={{ color: '#00d9ff', marginBottom: '15px' }}>TECINFO 2026</h2>}

      <div className={`comentario-fixado ${animate ? 'animar' : ''}`}>
        <div className="tag-fixado-wrapper">
          <span className="tag-fixado">Última Curtida</span>
          <span className="tempo-fixado">{fixadoAtual.tempo}</span>
        </div>
        <div className="autor-fixado">
          <img src={fixadoAtual.foto} alt={fixadoAtual.nome} className="foto-fixado" />
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
            placeholder="Responder..."
            value={textoResposta}
            onChange={(e) => setTextoResposta(e.target.value)}
            className="input-resposta"
          />
          <button type="submit" className="botao-enviar-resposta">Enviar</button>
        </form>
      </div>

      {curtidas > 0 && (
        <div className="curtidas">
          <span className="icone-coracao">❤</span>
          <span>{curtidas} {curtidas === 1 ? 'Curtida' : 'Curtidas'}</span>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <button type="button" className="botao-curtir" onClick={handleCurtir}>
          <span className="icone-like">❤</span> Curtir
        </button>
        <button type="button" className="botao-curtir" onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? 'Ocultar' : 'Mostrar'} Detalhes
        </button>
      </div>

      {showMore && <p className="subtitulo-comentarios" style={{ marginTop: '16px' }}>{perfil.bio}</p>}

      <div className="redes-sociais">
        <a href={perfil.github} target="_blank" rel="noopener noreferrer" className="botao-social github">GitHub</a>
        <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" className="botao-social linkedin">LinkedIn</a>
      </div>
    </section>
  )
}

function GaleriaCard() {
  const [indiceImagem, setIndiceImagem] = useState(0)
  const imagemAtual = IMAGENS_GALERIA[indiceImagem]

  return (
    <section className="galeria-card">
      <div className="galeria-cabecalho">
        <h3 className="titulo-galeria">Galeria em Destaque</h3>
        <span className="contador-galeria">{indiceImagem + 1} de {IMAGENS_GALERIA.length}</span>
      </div>
      <div className="galeria-imagem-container">
        <img src={imagemAtual.url} alt={imagemAtual.legenda} className="galeria-img" />
      </div>
      <p className="galeria-legenda">{imagemAtual.legenda}</p>
      <button type="button" className="botao-proxima" onClick={() => setIndiceImagem((prev) => (prev + 1) % IMAGENS_GALERIA.length)}>
        Próxima
      </button>
    </section>
  )
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [textoEspelhado, setTextoEspelhado] = useState('') // Espelhamento de input em tempo real

  const perfilAtivo = PERFIS[index]

  return (
    <main className="container">
      <header className="cabecalho-principal" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h1 className="titulo-comentarios">Painel de Controle - Tecinfo 2026</h1>
      </header>

      {/* Seção de espelhamento de input */}
      <section className="espelhamento-container" style={{ width: '100%', maxWidth: '380px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Digite algo para espelhar..."
          value={textoEspelhado}
          onChange={(e) => setTextoEspelhado(e.target.value)}
          className="input-resposta"
          style={{ width: '100%', padding: '10px', borderRadius: '8px', marginBottom: '8px' }}
        />
        <div className="card-espelho" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          <p>Texto em tempo real: <strong style={{ color: '#fff' }}>{textoEspelhado || 'Nenhum texto digitado'}</strong></p>
        </div>
      </section>

      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: '500' }}>
          Perfil ({index + 1} de {PERFIS.length})
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button type="button" className="botao-social github" onClick={() => setIndex((prev) => prev - 1)} disabled={index === 0}>
            Anterior
          </button>
          <button type="button" className="botao-social github" onClick={() => setIndex((prev) => prev + 1)} disabled={index === PERFIS.length - 1}>
            Próximo
          </button>
        </div>
      </nav>

      <ProfileCard key={perfilAtivo.id} perfil={perfilAtivo} />

      <GaleriaCard />

      <section className="produtos-section">
        <div className="cabecalho-comentarios">
          <h2 className="titulo-comentarios">Produtos Digitais</h2>
          <p className="subtitulo-comentarios">Soluções tecnológicas</p>
        </div>
        <div className="lista-produtos">
          {PRODUTOS_DIGITAIS.map((produto) => (
            <article className="produto-card" key={produto.id}>
              <div className="produto-imagem-container">
                <img src={produto.imagem} alt={produto.titulo} className="produto-img" />
              </div>
              <div className="produto-conteudo">
                <h3 className="produto-titulo">{produto.titulo}</h3>
                <p className="produto-descricao">{produto.descricao}</p>
                <div className="produto-footer">
                  <span className="produto-preco">{produto.preco}</span>
                  <button type="button" className="botao-comprar" onClick={() => alert(`Comprar: ${produto.titulo}`)}>
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}