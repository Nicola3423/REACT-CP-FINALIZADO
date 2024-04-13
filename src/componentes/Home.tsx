// Importação do React
import React from "react";

// Definição da interface para as funcionalidades
interface ExibirFuncionalidades {
  id: number;
  title: string;
  description: string;
}

// Array contendo as funcionalidades
const Fun: ExibirFuncionalidades[] = [
  {
    id: 1,
    title: "Tela de Posts",
    description:
      "Exibe uma lista de posts consumidos da API. Cada post mostra o título e o corpo. Existe uma rota específica para acessar esta tela.",
  },
  {
    id: 2,
    title: "Tela de Usuários",
    description:
      "Exibe uma lista de usuários consumidos da API. Tabela em HTML para organizar. Cada usuário mostra o nome, email e endereço em um formato amigável. Existe uma rota específica para acessar esta tela.",
  },
  {
    id: 3,
    title: "Tela de Fotos",
    description:
      "Exibe uma galeria de fotos consumidas da API. Cada foto é exibida com seu respectivo título. Existe uma rota específica para acessar esta tela.",
  },
];

// Componente Funcionalidades
const Funcionalidades: React.FC = () => {
  return (
    <div className="p-4">
      {/* Título das funcionalidades */}
      <h2 className="text-lg font-bold">Funcionalidades</h2>
      {/* Lista de funcionalidades */}
      <ul className="mt-4">
        {/* Mapeia as funcionalidades e exibe cada uma delas */}
        {Fun.map((item) => (
          <li key={item.id} className="mt-4">
            {/* Título da funcionalidade */}
            <h3 className="text-md font-bold">{item.title}</h3>
            {/* Descrição da funcionalidade */}
            <p className="mt-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Funcionalidades;