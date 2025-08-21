import { useState } from 'react';

function SerieForm({ onAddSerie }) {
  const [formData, setFormData] = useState({
    titulo: '',
    temporadas: '',
    lancamento: '',
    diretor: '',
    produtora: '',
    categoria: '',
    dataAssistido: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSerie(formData);
    setFormData({
      titulo: '',
      temporadas: '',
      lancamento: '',
      diretor: '',
      produtora: '',
      categoria: '',
      dataAssistido: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Título" value={formData.titulo} onChange={handleChange} required />
      <input name="temporadas" placeholder="Temporadas" value={formData.temporadas} onChange={handleChange} required />
      <input name="lancamento" placeholder="Ano de Lançamento" value={formData.lancamento} onChange={handleChange} required />
      <input name="diretor" placeholder="Diretor" value={formData.diretor} onChange={handleChange} required />
      <input name="produtora" placeholder="Produtora" value={formData.produtora} onChange={handleChange} required />
      <input name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} required />
      <input name="dataAssistido" placeholder="Data que assistiu" value={formData.dataAssistido} onChange={handleChange} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default SerieForm;
