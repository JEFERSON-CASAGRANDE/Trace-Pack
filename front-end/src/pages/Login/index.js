import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login__container">
        <h1>Faça seu login</h1>
        <form>
          <Input
            text="E-mail"
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Button
            type="submit"
            handleClick={() => navigate('/map')}
          >
            Entrar

          </Button>
          <Button
            type="button"
            handleClick={() => navigate('/register')}
          >
            Criar cont
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
