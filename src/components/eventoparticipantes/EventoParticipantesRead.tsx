import { Button, Container, Table, TableCell } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import EventoParticipantesDeleteButton from "./EventoParticipantesDeleteButton";
import EventoParticipantesSendButton from "./EventoParticipantesSendButton";

const EventoParticipantesRead = ({ handleId }: {handleId: any}) => {
    const backend_url : string | undefined = ((window as any)._env_ ? (window as any)._env_.REACT_APP_BACKEND_URL : undefined) || process.env.REACT_APP_BACKEND_URL;

    const [APIData, setAPIData] = useState([]);
    
    useEffect(() => {
        axios.get(`${backend_url}/api/eventoparticipantes`)
            .then((response) => {
                setAPIData(response.data);
            })
    })

    return (
        <Container>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Evento</Table.HeaderCell>
                        <Table.HeaderCell>Participante</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                        <Table.HeaderCell>Enviar Ingresso</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data: any) => {
                    return (
                        <Table.Row key={data.evento.id}>
                            <Table.Cell>{data.evento.nome}</Table.Cell>
                            <Table.Cell>{data.participante.nome}</Table.Cell>
                            <TableCell>
                                <EventoParticipantesDeleteButton data={data} />
                            </TableCell>
                            <TableCell>
                                <EventoParticipantesSendButton data={data} />
                            </TableCell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        </Container>
    );
};

export default EventoParticipantesRead;