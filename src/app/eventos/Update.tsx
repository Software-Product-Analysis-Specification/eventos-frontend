import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Form } from 'semantic-ui-react'

export default function Update() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let id = params.get('id');

        axios.get(`https://backend.eventos.fernandohara.com.br/api/eventos/${id}`)
            .then((response) => {
                setId(response.data.id);
                setName(response.data.nome);
                setDescription(response.data.descricao);
            })
    }, []);

    const postData = () => {
        axios.put(`https://backend.eventos.fernandohara.com.br/api/eventos`, {
            "Id": id,
            "Nome": name,
            "Descricao": description
        })
        .then(response => {
            window.location.href = '/eventos';    
        });
    }
    return (
        <Container>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Salvar</Button>
            </Form>
        </Container>
    )
}