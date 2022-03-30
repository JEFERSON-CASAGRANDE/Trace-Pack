import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPolygons } from '../../utils/axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function RegisterPolygons() {
  const navigate = useNavigate();
  const [listRegisters, setListRegisters] = React.useState([]);
  const [registerData, setRegisterData] = React.useState({
    name: '',
    polygon: [[]],
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleAddItemList = (event) => {
    event.preventDefault();
    setListRegisters([...listRegisters, registerData]);
    setRegisterData({
      name: '',
      polygon: [[]],
    });
  };

  console.log(listRegisters);

  const handleClick = async () => {
    const response = await createPolygons(listRegisters);
    if (response.status === 201) {
      navigate('/map');
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Cadastre os poligonos</h1>
        <form>
          <Input
            handleChange={handleChange}
            name="name"
            value={registerData.name}
            text="Nome: "
            type="text"
            placeholder="Nome"
          />
          <Input
            name="polygon"
            handleChange={handleChange}
            value={registerData.polygon}
            text="Poligono: "
            type="text"
            placeholder="poligono"
          />
          <Button
            type="submit"
            text="Adcionar"
            handleClick={handleAddItemList}
          />
        </form>
        <h3>Poligonos definidos:</h3>
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
    </div>

  );
}

export default RegisterPolygons;