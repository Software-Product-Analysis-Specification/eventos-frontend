import { Container } from 'semantic-ui-react';
import Create from './Create';
import Read from './Read';
import Update from './Update';

export default function Eventos() {
    let querystring = new URLSearchParams(window.location.search);
    let id = querystring.get('id');

    return (
        <Container>
            <h1>Cadastro de Eventos</h1>
            { id ? <Update /> : <Create /> }
            <br />
            <Read />
        </Container>
    );
}