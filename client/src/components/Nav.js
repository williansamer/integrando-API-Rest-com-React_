import React from 'react'
import { Link } from 'react-router-dom'
import AuthLogin from './AuthLogin'

export default function Nav() {

    return (
        <div className="nav">
            <h1><Link className='route-link' to="/">WillWeb</Link></h1>
            <div className="container-menu">
                <ul className="menu">
                    <li><Link className='route-link' to="/apresentacao">Apresentação</Link></li>
                    <li><Link className='route-link' to="/aulas">Aulas</Link></li> {/* A diferença entre Link e a tag <a> é que Link não carrega a página toda, ou seja, não precisa recarregar a página para carregar a página de Aulas. */}
                    <li><Link className='route-link' to="/sobre">Sobre</Link></li>
                </ul>
                <AuthLogin />
            </div>
        </div>
    )
}
