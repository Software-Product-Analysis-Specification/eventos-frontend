import { Container } from "semantic-ui-react";
import ParticipantesCreate from "../../components/participantes/ParticipantesCreate";
import ParticipantesRead from "../../components/participantes/ParticipantesRead";
import { useState } from "react";
import ParticipantesUpdate from "../../components/participantes/ParticipantesUpdate";

export default function Participantes() {
    const [id, setId] = useState(0);

    const handleId = (id: number) => {
        setId(id);
    };
    
    return (
        <Container>
            <h1>Cadastro de Participantes</h1>
            { id ? <ParticipantesUpdate pid={id.toString()} handleId={handleId} /> : <ParticipantesCreate /> }
            <br />
            <ParticipantesRead handleId={handleId} />
        </Container>
    );
}