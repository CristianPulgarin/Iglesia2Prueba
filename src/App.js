
import { Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import { Inicio } from './Inicio';

import { Devocionales } from './Devocionales';
import { Somos } from './Somos';
import { Diezmos } from './Inicio/Diezmos';
import Nav from './Nav';

function App() {

  
  return (
    <>


    <Nav/>
    <Routes>
        
      <Route path="/" s element={<Inicio/> } />
      <Route path="/devocionales" element={<Devocionales/> }/>
      <Route path="/somos" element={<Somos/> }/>
      <Route path="/servicios" element={<Inicio/> }/>
      <Route path="/ministerios" element={<Inicio/> }/>
      <Route path="/Donaciones" element={<Inicio/> }/>
      
      
      
    </Routes>  
    

        

    </>
  );
}

export default App;
