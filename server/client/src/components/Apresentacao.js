import React, {useEffect} from 'react'
import { useLocation } from 'react-router'

function useQuery(){
    return new URLSearchParams(useLocation().search); //Aqui eu pego o parâmetro da URL e o search é o parâmetro que eu quero.
}

export default function Apresentacao() {

    const query = useQuery();
    //query é um objeto que representa a query da URL. É o que vem depois do ?.

    useEffect(() => {
        //console.log(query.get('video'));
        //O get retorna o valor do parâmetro que eu quero. No caso, o parâmetro 'video'. Que vem depois do ?.
    });

    return (
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get('video')}`} title="YouTube video player"></iframe>{/* 'Sharing' o vídeo no Embed do YouTube, copiando o iframe e colando aqui. Modificado no src para o parâmetro que eu quero. */}
            {/* Agora é só colocar o '?video=NhUr8cwDiiM' após o endereço na URL fica: 'http://localhost:3000/apresentacao' que o vídeo irá rodar*/}
            {/* Para mudar o vídeo, basta mudar o parâmetro 'video' na URL após o sinal de igual(=). */}
            <p>PS: Estudo de caso de 'query' do 'useLocation'. <br/> Para rodar o vídeo, é só colocar o '?video=NhUr8cwDiiM' após 'apresentacao'</p>
        </div>
    )
}

//O Objetivo do useLocation é que eu possa pegar informações da URL.
//O useLocation retorna um objeto com as informações da URL.
//Eu posso acessar o parâmetro que eu quero através do método 'search'.
//Por exemplo, para acessar o parâmetro 'id' eu posso usar o método 'get' e passar o parâmetro 'id'.
//O método 'get' retorna um valor.
//O 'URLSearchParams' é um objeto que recebe o valor que o useLocation retorna e o converte em um objeto.
//O 'URLSearchParams' é uma classe, ou seja, eu preciso instanciar ela.
//O 'new URLSearchParams' é o construtor da classe.
//O 'URLSearchParams' é um objeto que recebe um parâmetro, ou seja, ele recebe uma string com a URL.
//Aqui eu recebo a URL que eu quero pegar e transformo em um objeto.
//Aqui eu posso acessar o parâmetro que eu quero através do método 'get' e passar o parâmetro 'id'.
//O método 'get' retorna um valor.
//O 'URLSearchParams' é um objeto que recebe o valor que o useLocation retorna e o converte em um objeto.
//O 'URLSearchParams' é uma classe, ou seja, eu preciso instanciar ela.
//O 'new URLSearchParams' é o construtor da classe.
