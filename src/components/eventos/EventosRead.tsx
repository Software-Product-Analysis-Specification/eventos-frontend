import { Button, Container, Table, TableCell } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import EventosDeleteButton from "./EventosDeleteButton";
import moment from "moment-timezone";

const EventosRead = ({ handleId }: {handleId: any}) => {
    const [APIData, setAPIData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://backend.eventos.fernandohara.com.br/api/eventos`)
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
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data: any) => {
                    let date = '';

                    if(data.data !== null)
                    {
                        var gmt = moment.tz(data.data, 'GMT');
                        
                        date = gmt.tz("America/Sao_Paulo").format('DD/MM/YYYY HH:mm');
                    }

                    return (
                        <Table.Row>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.descricao}</Table.Cell>
                            <Table.Cell>{date}</Table.Cell>
                            <TableCell>
                                <Button onClick={() => handleId(data.id)}>Atualizar</Button>
                            </TableCell>
                            <TableCell>
                                <EventosDeleteButton data={data} />
                            </TableCell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        </Container>
    );
};

export default EventosRead;