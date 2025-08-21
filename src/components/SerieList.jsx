function SerieList({ series }) {
  return (
    <div>
      <h3>Séries Cadastradas</h3>
      <ul>
        {series.map((serie, index) => (
          <li key={index}>
            <strong>{serie.titulo}</strong> — {serie.temporadas} temporadas<br />
            Lançamento: {serie.lancamento}<br />
            Diretor: {serie.diretor}<br />
            Produtora: {serie.produtora}<br />
            Categoria: {serie.categoria}<br />
            Assistido em: {serie.dataAssistido}<br />
            <button>Editar</button>
            <button>Excluir</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SerieList;
