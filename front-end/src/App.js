import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register/user';
import MyMap from './pages/Map';
import RegisterPonto from './pages/Register/points';
import RegisterPolygons from './pages/Register/polygons';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/cadastro-usuario" element={<Register />} />
      <Route exact path="/cadastro-ponto" element={<RegisterPonto />} />
      <Route exact path="/cadastro-poligono" element={<RegisterPolygons />} />
      <Route exact path="/map" element={<MyMap />} />
    </Routes>
  );
}

export default App;
