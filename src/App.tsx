// Importações necessárias 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./componentes/Home";
import Posts from "./componentes/Posts";
import Users from "./componentes/Users";
import Photos from "./componentes/Photos";

// Componente principal 
function App() {
  return (
    // Componente Router envolve tudo
    <Router>
      {/* Div principal com tailwin */}
      <div className="container mx-auto">
        {/* Cabeçalho da aplicação */}
        <header className="py-4 text-center">
          <h1 className="text-3xl">CP 02 - 2° SEMESTRE</h1>
        </header>
        
        {/* Navegação com css*/}
        <nav className="flex justify-center py-3">
          <ul className="flex justify-center space-x-4">
            {/* Links para as diferentes rotas */}
            <li><Link to='/' className="text-blue-500 hover:text-blue-700">HOME</Link></li>
            <li><Link to='/Posts' className="text-blue-500 hover:text-blue-700">Posts</Link></li>
            <li><Link to='/Users' className="text-blue-500 hover:text-blue-700">Users</Link></li>
            <li><Link to='/Photos' className="text-blue-500 hover:text-blue-700">Fotos</Link></li>
          </ul>
        </nav>
        
        <main>
          <Routes>
            {/* Definição das rotas e os componentes */}
            <Route path="/" element={<Home />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </main>
        
        {/* Rodapé com css  */}
        <footer className="text-center py-4">
          <p>Nicola Monte Cravo Garofalo, RM 553991, 1TDSZ, Link do repositorio: https://github.com/Nicola3423/REACT-CP-FINALIZADO</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;