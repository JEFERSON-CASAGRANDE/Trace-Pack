import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function Header() {
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <Button
        type="button"
        text="Sair"
        handleClick={() => navigate('/login')}
      />
      <Button
        type="button"
        text="Mapa"
        handleClick={() => navigate('/map')}
      />
      <Button
        type="button"
        text="Cadastro de Usuário"
        handleClick={() => navigate('/cadastro-usuario')}
      />
      <Button
        type="button"
        text="Cadastro de Ponto"
        handleClick={() => navigate('/cadastro-ponto')}
      />
      <Button
        type="button"
        text="Cadastro de Poligono"
        handleClick={() => navigate('/cadastro-poligono')}
      />
    </nav>
  );
}

export default Header;
