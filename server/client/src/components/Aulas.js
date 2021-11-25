import React from 'react';
import data from './Data';
import { Link, Outlet } from 'react-router-dom';
//Com o react-router-dom da versão 6 eu não preciso mais do useRouteMatch, pois ele já faz isso automaticamente. 

export default function Aulas() {

    return (
        <div>
            <h1>Aulas</h1>
            <ul className="aulas">
                {data.map(aula => {
                    return (
                        <li key={aula.id}><Link to={`${aula.slug}`}>{aula.title}</Link></li>
                    )}
                )}
            </ul>
            <Outlet />
        </div>
    )
}
