import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Table } from 'semantic-ui-react'

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://backend.eventos.fernandohara.com.br/api/eventos`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    
    return (
        <Container>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data: any) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.descricao}</Table.Cell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        </Container>
    )
}