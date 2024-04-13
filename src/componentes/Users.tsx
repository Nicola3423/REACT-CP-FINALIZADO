// Importações necessárias
import React, { useState, useEffect } from 'react';


function App() {
  // Estado para armazenar a lista de usuários
  const [users, setUsers] = useState([]);

  // Efeito para buscar os usuários da API quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar os usuários da API
    const fetchUsers = async () => {
      try {
        // Requisição para a API que retorna os usuários
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // Verifica se a requisição foi bem sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar os usuários');
        }
        // Converte a resposta em formato JSON
        const data = await response.json();
        // Atualiza o estado com os usuários obtidos da API
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    // Chama a função para buscar os usuários quando o componente é montado
    fetchUsers();
  }, []); // O array de dependências está vazio, então este efeito é executado apenas uma vez, quando o componente é montado

  return (
    <div className="container mx-auto">
      {/* Título da lista de usuários */}
      <h1 className='text-2xl font-bold mb-4'>Lista de Usuários</h1>
      {/* Tabela para exibir os usuários */}
      <table className="w-full border-collapse border border-gray-500">
        <thead>
          {/* Cabeçalho da tabela */}
          <tr className="bg-gray-200">
            <th className='text-lg font-semibold p-2 border border-gray-500'>Nome</th>
            <th className='text-lg font-semibold p-2 border border-gray-500'>Email</th>
            <th className='text-lg font-semibold p-2 border border-gray-500'>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia os usuários e renderiza uma linha para cada um */}
          {users.map(user => (
            <tr key={user.id} className="bg-white">
              {/* Coluna com o nome do usuário */}
              <td className='p-2 border border-black-500'>{user.name}</td>
              {/* Coluna com o email do usuário */}
              <td className='p-2 border border-black-500'>{user.email}</td>
              {/* Coluna com o endereço do usuário */}
              <td className='p-2 border border-black-500'>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;