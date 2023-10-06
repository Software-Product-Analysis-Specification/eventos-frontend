import { Container } from 'semantic-ui-react';
import Create from './Create';
import Read from './Read';

export default function Eventos() {
    return (
        <Container>
            <h1>Cadastro de Eventos</h1>
            <Create />
            <br />
            <Read />
        </Container>
    );
}