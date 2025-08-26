import { useState } from 'react';

export default function SerieForm({ onAddSerie }) {
  const [formData, setFormData] = useState({
    titulo: '',
    temporadas: '',
    lancamento: '',
    diretor: '',
    produtora: '',
    categoria: '',
    dataAssistido: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddSerie(formData);
    setFormData({
      titulo: '',
      temporadas: '',
      lancamento: '',
      diretor: '',
      produtora: '',
      categoria: '',
      dataAssistido: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Título" value={formData.titulo} onChange={handleChange} required />
      <input name="temporadas" placeholder="Nº Temporadas" value={formData.temporadas} onChange={handleChange} required />
      <input name="lancamento" type="date" value={formData.lancamento} onChange={handleChange} required />
      <input name="diretor" placeholder="Diretor" value={formData.diretor} onChange={handleChange} required />
      <input name="produtora" placeholder="Produtora" value={formData.produtora} onChange={handleChange} required />
      <input name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} required />
      <input name="dataAssistido" type="date" value={formData.dataAssistido} onChange={handleChange} required />
      <button type="submit">Adicionar Série</button>
    </form>
  );
}
