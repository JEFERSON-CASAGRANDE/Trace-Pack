import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Register() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login__container">
        <h1>Faça seu cadastro</h1>
        <form>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
          />
          <Input
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Button
            type="submit"
            handleClick={() => navigate('/map')}
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>

  );
}

export default Register;
