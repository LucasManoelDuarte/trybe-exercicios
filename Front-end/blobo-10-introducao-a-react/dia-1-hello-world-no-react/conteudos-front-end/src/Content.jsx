import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div className="content-card">
        {
          conteudos.map((conteudo, index) => {
            return <div key={index} className="content-unique">
              <h4>O conteúdo é: {conteudo.conteudo}</h4>
              <p>Bloco: {conteudo.bloco}</p>
              <p>Status: {conteudo.status}</p>
            </div>
          })
        }
      </div>
    )
  }
}

export default Content;