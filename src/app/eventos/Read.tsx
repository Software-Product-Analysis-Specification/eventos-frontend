import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Table, TableCell } from 'semantic-ui-react'

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
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data: any) => {
                    function setData(data: any): void {
                        let { id } = data;
                        window.location.href = '/eventos?id=' + id;
                    }

                    function deleteData(data: any): void {
                        let { id } = data;
                        axios.delete(`https://backend.eventos.fernandohara.com.br/api/eventos/${id}`)
                        .then(response => {
                            window.location.href = "/eventos";                            
                        });
                    }

                    return (
                        <Table.Row>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.descricao}</Table.Cell>
                            <TableCell>
                                <Button onClick={() => setData(data)}>Atualizar</Button>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => deleteData(data)}>Excluir</Button>
                            </TableCell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        </Container>
    )
}