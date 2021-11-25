import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import LoginError from '../components/LoginError';
import Registro from '../components/Registro';
import Home from '../components/Home';
import Apresentacao from '../components/Apresentacao';
import Aulas from '../components/Aulas';
import Aula from '../components/Aula';
import Admin from '../components/Admin';
import Sobre from '../components/Sobre';

import PrivateRoute from '../components/PrivateRoute'; //importando PrivateRoute que é um componente que restringe o acesso a uma página.
import AcessoNegado from '../components/AcessoNegado';

export default function MainRoutes() {
    return (
        <Routes>
          <Route path="/user/log" element={<Login />}>
            <Route path="/user/log/error" element={<LoginError />} />
          </Route>
          <Route path="/user/registro" element={<Registro />}>
            <Route path="/user/registro/error" element={<LoginError />} />
          </Route>
          <Route path="/" element={<Home />} />{/* "path" é o caminho que o usuário irá digitar para acessar a página. "element" é o componente que será renderizado. */}
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/aulas" element={<PrivateRoute><Aulas /></PrivateRoute>}> {/* PrivateRoute tem que ficar no atributo "element" para que o componente seja renderizado. Não pode ficar no lugar do Route. */}
            <Route path="/aulas/:slug" element={<Aula />} />
          </Route>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/acesso-negado" element={<AcessoNegado />} />
          <Route path="*" element={<div>Página não encontrada</div>} /> {/* "*" é um caminho que não existe. */}
        </Routes>
    )
}
