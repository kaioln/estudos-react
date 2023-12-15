import React from 'react';
import './App.css';

export const FirstComponent = () => {

    const name = 'Kaio'
    const data = {
        age: 22,
        job: 'Programmer',
    };

    return <div>
        <h1>Meu Primeiro Componente</h1>
        <h2>Meu nome é {name}</h2>
        <p>Eu atuo como: {data.job}</p>
    </div>
}