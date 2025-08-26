import { useState } from 'react';
import SerieList from '../components/SerieList/SerieList';

export default function Listagem() {
  const [series, setSeries] = useState([]);

  function handleDelete(index) {
    const novasSeries = [...series];
    novasSeries.splice(index, 1);
    setSeries(novasSeries);
  }

  return (
    <div>
      <SerieList series={series} onDelete={handleDelete} />
    </div>
  );
}
