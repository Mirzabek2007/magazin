import React from 'react';
import { Route, Routes } from "react-router-dom"
import Navbar from './mm/navbar';
import Kabinet from './mm/kabinet';
import Menu from './mm/menu';
import Karzinka from './mm/karzinka';
import OrderPag from './mm/Order pag';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/kabn' element={<Kabinet />} />
        <Route path='/men' element={<Menu />} />
        <Route path='/kar' element={<Karzinka />} />
        <Route path='/or' element={< OrderPag/>} />
      </Routes>
    </div>
  );
} 

export default App;
