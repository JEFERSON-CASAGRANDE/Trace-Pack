import React from 'react';
import Input from '../Input/Input';

function FormPoints() {
  return (
    <form>
      <Input
        // handleChange={handleChange}
        // value={registerData.name}
        text="name: "
        type="text"
        name="name: "
        placeholder="Nome"
      />
      <Input
        // handleChange={handleChange}
        // value={registerData.email}
        text="lat: "
        type="text"
        name="latitute"
        placeholder="latitude"
      />
      <Input
        // handleChange={handleChange}
        // value={registerData.password}
        text="lng: "
        type="text"
        name="longitude"
        placeholder="longitute"
      />
    </form>
  );
}

export default FormPoints;
