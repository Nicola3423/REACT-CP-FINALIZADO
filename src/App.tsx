import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./componentes/Home";
import Posts from "./componentes/Posts";
import Users from "./componentes/Users";
import Photos from "./componentes/Photos";
import img1 from "./componentes/img/FIAP.jpg";
import img2 from "./componentes/img/React.png";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <header className="py-4 text-center">
          <h1 className="text-3xl">CP 02 - 2° SEMESTRE</h1>
        </header>
        
        <nav className="flex justify-between py-3"> {/* Alterado justify-center para justify-between */}
          <ul className="flex space-x-4">
            <li><Link to='/' className="text-blue-500 hover:text-blue-700">HOME</Link></li>
            <li><Link to='/Posts' className="text-blue-500 hover:text-blue-700">Posts</Link></li>
            <li><Link to='/Users' className="text-blue-500 hover:text-blue-700">Users</Link></li>
            <li><Link to='/Photos' className="text-blue-500 hover:text-blue-700">Fotos</Link></li>
          </ul>
          <div className="flex"> {/* Criando uma div para as imagens */}
            <img src={img1} alt="Image 1" className="w-16 h-16 mr-2" /> {/* Adicione a classe para ajustar o tamanho da imagem */}
            <img src={img2} alt="Image 2" className="w-16 h-16 mr-2" /> {/* Adicione a classe para ajustar o tamanho da imagem */}
          </div>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </main>
        
        <footer className="text-center py-4">
          <p>Nicola Monte Cravo Garofalo, RM 553991, 1TDSZ, Link do repositorio: https://github.com/Nicola3423/REACT-CP-FINALIZADO</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
