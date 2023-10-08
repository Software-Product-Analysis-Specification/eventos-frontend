import { Button, Container, Table, TableCell } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import ParticipantesDeleteButton from "./ParticipantesDeleteButton";

const ParticipantesRead = ({ handleId }: {handleId: any}) => {
    const backend_url : string | undefined = ((window as any)._env_ ? (window as any)._env_.REACT_APP_BACKEND_URL : undefined) || process.env.REACT_APP_BACKEND_URL;

    const [APIData, setAPIData] = useState([]);
    
    useEffect(() => {
        axios.get(`${backend_url}/api/participantes`)
            .then((response) => {
                setAPIData(response.data);
            })
    })

    return (
        <Container>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Whatsapp</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data: any) => {
                    return (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                            <Table.Cell>{data.whatsapp}</Table.Cell>
                            <TableCell>
                                <Button onClick={() => handleId(data.id)}>Atualizar</Button>
                            </TableCell>
                            <TableCell>
                                <ParticipantesDeleteButton data={data} />
                            </TableCell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        </Container>
    );
};

export default ParticipantesRead;