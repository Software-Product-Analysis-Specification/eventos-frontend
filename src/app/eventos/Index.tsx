import { Container } from 'semantic-ui-react';
import EventosCreate from '../../components/eventos/EventosCreate';
import { useState } from 'react';
import EventosUpdate from '../../components/eventos/EventosUpdate';
import EventosRead from '../../components/eventos/EventosRead';

export default function Eventos() {
    const [id, setId] = useState(0);

    const handleId = (id: number) => {
        setId(id);
    };

    return (
        <Container>
            <h1>Cadastro de Eventos</h1>
            { id ? <EventosUpdate pid={id.toString()} handleId={handleId} /> : <EventosCreate /> }
            <br />
            <EventosRead handleId={handleId} />
        </Container>
    );
}