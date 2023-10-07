import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";

const EventosCreate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const postData = () => {
        axios.post(`https://backend.eventos.fernandohara.com.br/api/eventos`, {
            "Nome": name,
            "Descricao": description
        })
        .then(() => {
            setName('');
            setDescription('');
        });
    };

    return (
        <>
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
        </>
    );
};

export default EventosCreate;