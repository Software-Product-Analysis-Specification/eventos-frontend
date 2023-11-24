import { Container } from 'semantic-ui-react';
import { useState } from 'react';
import EventoParticipantesRead from '../../components/eventoparticipantes/EventoParticipantesRead';
import EventoParticipantesCreate from '../../components/eventoparticipantes/EventoParticipantesCreate';

export default function EventoParticipantes() {
    const [id, setId] = useState(0);

    const handleId = (id: number) => {
        setId(id);
    };

    return (
        <Container>
            <h1>Cadastro de Participantes no Evento</h1>
            <EventoParticipantesCreate />
            <br />
            <EventoParticipantesRead handleId={handleId} />
        </Container>
    );
}