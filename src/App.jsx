import { useState } from 'react'
import './App.css'

function App() {
  const [curtidas, setCurtidas] = useState(0)

  const handleCurtir = () => {
    setCurtidas(curtidas + 1)
  }

  return (
    <div className="container">
      <div className="card">
        <div className="avatar">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KhyBAe72OOUZ6urcjtwYH2OvS1FkEBo8GhBhmp1cqvW5QMs9rSVJ7ZM&s=10" 
            alt="Foto de perfil" 
          />
        </div>

        <h1 className="nome">Satoru Mario</h1>
        <p className="cargo">Aprendendo fron-end</p>

        
        {curtidas > 0 && (
          <div className="curtidas">
            <span className="icone-coracao">❤</span>
            <span>{curtidas} Curtidas</span>
          </div>
        )}

        <button className="botao-curtir" onClick={handleCurtir}>
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
      </div>
    </div>
  )
}

export default App