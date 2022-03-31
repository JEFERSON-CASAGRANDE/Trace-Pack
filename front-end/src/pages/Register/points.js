import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPoints } from '../../utils/axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import NavBar from '../../components/NavBar/NavBar';

function RegisterPonto() {
  const navigate = useNavigate();
  const [listRegisters, setListRegisters] = React.useState([]);
  const [registerData, setRegisterData] = React.useState({
    name: '',
    lat: '',
    lng: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleAddItemList = (event) => {
    event.preventDefault();
    setListRegisters([...listRegisters, registerData]);
    setRegisterData({
      name: '',
      lat: '',
      lng: '',
    });
  };

  console.log(listRegisters);

  const handleClick = async () => {
    const response = await createPoints(listRegisters);
    if (response.status === 201) {
      navigate('/map');
    }
  };

  return (
    <div className="point__container">
      <NavBar />
      <form className="form">
        <h1>Cadastre os pontos</h1>
        <Input
          handleChange={handleChange}
          name="name"
          value={registerData.name}
          text="Name: "
          type="text"
          placeholder="Nome"
        />
        <Input
          name="lat"
          handleChange={handleChange}
          value={registerData.lat}
          text="latitude: "
          type="text"
          placeholder="latitude"
        />
        <Input
          name="lng"
          handleChange={handleChange}
          value={registerData.lng}
          text="longitude: "
          type="text"
          placeholder="longitute"
        />
        <Button
          type="submit"
          text="Adcionar"
          handleClick={handleAddItemList}
        />
      </form>
      <h3>Pontos definidos:</h3>
      {listRegisters.map((item) => (
        <div key={item.name}>
          <p>
            Nome:
            {' '}
            {item.name}
          </p>
          <p>
            Latitude:
            {' '}
            {item.lat}
          </p>
          <p>
            Longitude:
            {' '}
            {item.lng}
          </p>
        </div>
      ))}
      <Button
        type="submit"
        text="Cadastrar"
        handleClick={handleClick}
      />
    </div>
  );
}

export default RegisterPonto;
