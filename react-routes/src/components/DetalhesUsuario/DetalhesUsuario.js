import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalhesUsuario(){
    const { id } = useParams()

    const [usuario, setUsuario] = useState({});

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => res.json())
            .then(dados => {
                if(dados.data){
                    setUsuario({
                        id: dados.data.id,
                        nome: dados.data.first_name,
                        sobrenome: dados.data.last_name,
                        email: dados.data.email,
                        foto: dados.data.avatar
                    })
                }
            })
    }, [id]);

    if(usuario.nome != ''){
        return <>
            <h1>{usuario.nome}  {usuario.sobrenome}</h1>
            <img src={usuario.foto} alt={usuario.nome}/>
            <p>{usuario.email}</p>
            <Link to="/cadastrados">Voltar</Link>

        </>
    }

    return <>
        <h1>Usuário não encontrado</h1>
        ola
        <Link to="/cadastrados">Voltar</Link>
    </>
}

export default DetalhesUsuario;