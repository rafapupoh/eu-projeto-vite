export default function SerieList({ series, onDelete }) {
  return (
    <div>
      <h2>Séries Cadastradas</h2>
      <ul>
        {series.map((serie, index) => (
          <li key={index}>
            <strong>{serie.titulo}</strong> - {serie.temporadas} temporadas
            <button onClick={() => onDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
