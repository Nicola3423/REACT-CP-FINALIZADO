// Importações necessárias
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./componentes/Home";
import Posts from "./componentes/Posts";
import Users from "./componentes/Users";
import Photos from "./componentes/Photos";
import img1 from "./componentes/img/FIAP.jpg"; // Importa a imagem para o primeiro ícone
import img2 from "./componentes/img/React.png"; // Importa a imagem para o segundo ícone

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <header className="py-4 text-center">
          <h1 className="text-3xl">CP 02 - 2° SEMESTRE</h1>
        </header>
        
        {/* Navegação com ícones e links */}
        <nav className="flex justify-between py-3">
          <ul className="flex space-x-4">
            <li><Link to='/' className="text-blue-500 hover:text-blue-700">HOME</Link></li>
            <li><Link to='/Posts' className="text-blue-500 hover:text-blue-700">Posts</Link></li>
            <li><Link to='/Users' className="text-blue-500 hover:text-blue-700">Users</Link></li>
            <li><Link to='/Photos' className="text-blue-500 hover:text-blue-700">Fotos</Link></li>
          </ul>
          {/* Div para os ícones */}
          <div className="flex">
            {/* Primeiro ícone */}
            <img src={img1} alt="Image 1" className="w-16 h-16 mr-2" />
            {/* Segundo ícone */}
            <img src={img2} alt="Image 2" className="w-16 h-16 mr-2" />
          </div>
        </nav>
        
        <main>
          {/* Rotas para os componentes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </main>
        
        <footer className="text-center py-4">
          {/* Informações do autor e link para o repositório */}
          <p>Nicola Monte Cravo Garofalo, RM 553991, 1TDSZ, Link do repositório: https://github.com/Nicola3423/REACT-CP-FINALIZADO</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

