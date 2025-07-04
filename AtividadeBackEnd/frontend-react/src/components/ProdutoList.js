import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <strong>{produto.nome}</strong> — R$ {produto.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProdutoList;
