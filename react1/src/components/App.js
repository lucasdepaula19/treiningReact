import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Mineirão/MG",
        data: "01/05/2019",
        horario: "19h",
    },
    casa: {
        nome: "Cruzeiro",
    },
    visitante: {
        nome: "Flamengo",
    }
};


export default class App extends React.Component {
    render() {
        return <PlacarContainer
            partida={dados.partida}
            casa={dados.casa}
            visitante={dados.visitante}
        />;
    }
}