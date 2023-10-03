import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.js';
import Comentarios from './comentarios/index.js';
import Cadastro from './cadastro/';
import Rodape from './rodape/';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Comentarios />}/>
        <Route path='cadastro' element={<Cadastro />}/>
        <Route path='rodape' element={<Rodape />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



