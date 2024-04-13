// Importações necessárias 
import React, { useState, useEffect } from 'react';

function App() {
  // Variavel para armazenar a lista de posts
  const [posts, setPosts] = useState([]);

  // Efeito para buscar os posts da API quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar os posts da API
    const fetchPosts = async () => {
      try {
        // Requisição para a API que retorna os posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Verifica se a requisição foi bem sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar os posts');
        }
        // Converte a resposta em formato JSON
        const data = await response.json();
        // Atualiza o estado com os posts obtidos da API
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    };

    // Chama a função para buscar os posts quando o componente é montado
    fetchPosts();
  }, []); // O array de dependências está vazio, então este efeito é executado apenas uma vez, quando o componente é montado

  return (
    <div className="container mx-auto">
      {/* Título da lista de posts */}
      <h1 className="text-3xl font-bold mb-4">Lista de Posts</h1>
      <ul>
        {/* Mapeia os posts e exibe cada um deles */}
        {posts.map(post => (
          <li key={post.id}>
            {/* Título do post */}
            <h2 className="text-black font-semibold p-4 text-xl">{post.title}</h2>
            {/* Corpo do post */}
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;