import axios from "axios";
import { useEffect, useImperativeHandle, useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";

const EventosUpdate = ({ pid, handleId }: { pid: string, handleId: any }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if(pid != id)
        {
            axios.get(`https://backend.eventos.fernandohara.com.br/api/eventos/${pid}`)
                .then((response) => {
                    setId(response.data.id);
                    setName(response.data.nome);
                    setDescription(response.data.descricao);
                });
        }
    });

    const postData = () => {
        axios.put(`https://backend.eventos.fernandohara.com.br/api/eventos`, {
            "Id": id,
            "Nome": name,
            "Descricao": description
        })
        .then(() => {
            handleId(undefined);
        });
    };

    return (
        <>
            <Container>
                <Form className="create-form">
                    <Form.Field>
                        <label>Id</label>
                        <input readOnly={true} placeholder='Id' value={id} onChange={(e) => setId(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Nome</label>
                        <input placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Descrição</label>
                        <input placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Field>
                    <Button onClick={postData} type='submit'>Salvar</Button><Button onClick={() => handleId(undefined)} type='button'>Cancelar</Button>
                </Form>
            </Container>
        </>
    );
};

export default EventosUpdate;