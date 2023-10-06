import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'semantic-ui-react'

export default function Create() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const postData = () => {
        axios.post(`https://backend.eventos.fernandohara.com.br/api/eventos`, {
            "Nome": name,
            "Descricao": description
        })
        .then(response => {
            window.location.reload();    
        });
    }
    return (
        <Container>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Salvar</Button>
            </Form>
        </Container>
    )
}