import { useState } from 'react';
import SerieForm from '../components/SerieForm.jsx';
import SerieList from '../components/SerieList.jsx';

function Cadastro() {
  const [series, setSeries] = useState([]);

  const adicionarSerie = (novaSerie) => {
    setSeries([...series, novaSerie]);
  };

  return (
    <div>
      <h2>Cadastro de Séries</h2>
      <SerieForm onAddSerie={adicionarSerie} />
      <SerieList series={series} />
    </div>
  );
}

export default Cadastro;
