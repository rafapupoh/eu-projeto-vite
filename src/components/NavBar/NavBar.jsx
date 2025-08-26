import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/listagem">Listagem</Link></li>
      </ul>
    </nav>
  );
}
