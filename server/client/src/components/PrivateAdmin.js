import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'; 
//Navigate é um custom hook que permite navegar entre as páginas...
//..é um substituto do Redirect da versão anterior.


export default function PrivateAdmin({children}) { //children é o conteúdo que está dentro do PrivateRoute(<Aulas />).
    const isLogged = useSelector(state=>state);


    return isLogged ? children : <Navigate to="/acesso-negado" /> // Se estiver logado, retorna o conteúdo que está dentro do PrivateRoute. Se não estiver logado, redireciona para a página principal.
}
