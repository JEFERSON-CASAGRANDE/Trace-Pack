import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../utils/axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleClick = async () => {
    const response = await createUser(registerData);
    if (response.status === 201) {
      navigate('/login');
    }
  };

  return (
    <form className="form-register">
      <h1>Faça seu cadastro</h1>
      <Input
        handleChange={handleChange}
        value={registerData.name}
        text="Nome"
        type="text"
        name="name"
        placeholder="Nome"
      />
      <Input
        handleChange={handleChange}
        value={registerData.email}
        text="E-mail"
        type="text"
        name="email"
        placeholder="E-mail"
      />
      <Input
        handleChange={handleChange}
        value={registerData.password}
        text="Senha"
        type="password"
        name="password"
        placeholder="Senha"
      />
      <Button
        type="submit"
        text="Cadastrar"
        handleClick={handleClick}
      />
    </form>

  );
}

export default Register;
