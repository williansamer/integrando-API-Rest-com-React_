import React from 'react'
import data from './Data'
import { useParams } from 'react-router';
//useParams() é um custom hook que retorna um objeto com as propriedades 'id' e 'aula'.

function useAula(){ //Função que é um 'custom hook' que retorna algo a ser executado.
    const {slug} = useParams();

    return data.filter(aula=> aula.slug === slug)[0]; //IMPORTANTE: A comparação deve ser feita com o "==" e não com o "===". Pois o "==" compara apenas o valor e não o tipo. Ou seja, se o 'aula.id' é um número e o 'params.id' é uma string, o '==' é o correta a ser usado.
}

export default function Aula() {
    const aula = useAula();

    return (
        <div>
            <h1>{aula.title}</h1>
            <iframe width="560" height="315" src={aula.video} title="YouTube video player"></iframe>
            <h3>{aula.description}</h3>
        </div>
    )
}
