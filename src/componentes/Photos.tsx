// Importações necessárias 
import React, { useState, useEffect } from 'react';

function App() {
  // Estado para armazenar a lista de fotos
  const [photos, setPhotos] = useState([]);

  // Efeito para buscar as fotos da API quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar as fotos da API
    const fetchPhotos = async () => {
      try {
        // Requisição para a API que retorna as fotos
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        // Verifica se a requisição foi bem sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar as fotos');
        }
        // Converte a resposta em formato JSON
        const data = await response.json();
        // Atualiza o estado com as fotos obtidas da API
        setPhotos(data);
      } catch (error) {
        console.error('Erro ao buscar as fotos:', error);
      }
    };

    // Chama a função para buscar as fotos quando o componente é montado
    fetchPhotos();
  }, []); // O array de dependências está vazio, então este efeito é executado apenas uma vez, quando o componente é montado

  return (
    <div className="container mx-auto">
      {/* Título da galeria de fotos */}
      <h1 className="text-3xl font-bold text-center mb-8">Galeria de Fotos</h1>
      {/* Grid responsivo para exibir as fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Mapeia as fotos e exibe cada uma delas */}
        {photos.map(photo => (
          <div key={photo.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            {/* Imagem da foto */}
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            {/* Título da foto */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;