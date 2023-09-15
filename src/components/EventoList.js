import React from 'react';
import axios from 'axios';

export default class EventoList extends React.Component {
  state = {
    eventos: []
  }

  componentDidMount() {
    axios.get(`https://backend.eventos.fernandohara.com.br/api/eventos`)
      .then(res => {
        const eventos = res.data;
        this.setState({ eventos });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.eventos
            .map(evento =>
              <li key={evento.id}>{evento.nome}</li>
            )
        }
      </ul>
    )
  }
}