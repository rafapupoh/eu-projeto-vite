import { useState } from 'react';
import SerieForm from '../components/SerieForm/SerieForm';

export default function Cadastro() {
  const [series, setSeries] = useState([]);

  function handleAddSerie(novaSerie) {
    setSeries([...series, novaSerie]);
  }

  return (
    <div>
      <h2>Cadastro de Série</h2>
      <SerieForm onAddSerie={handleAddSerie} />
    </div>
  );
}
