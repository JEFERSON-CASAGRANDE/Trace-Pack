import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../utils/axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    const response = await postLogin(loginData);
    if (response.status === 200) {
      navigate('/map');
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Faça seu login</h1>
        <form>
          <Input
            handleChange={handleChange}
            value={loginData.email}
            text="E-mail"
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <Input
            handleChange={handleChange}
            value={loginData.password}
            text="Senha"
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Button
            type="submit"
            handleClick={handleClick}
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
