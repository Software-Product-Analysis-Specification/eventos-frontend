import axios from "axios";
import { useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Container, Form } from "semantic-ui-react";

const EventosCreate = () => {
    const backend_url : string | undefined = process.env.REACT_APP_BACKEND_URL;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');

    const postData = () => {
        if(name !== '')
        {
            date.setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1]), 0);
            
            axios.post(`${backend_url}/api/eventos`, {
                "Nome": name,
                "Descricao": description,
                "Data": date
            })
            .then(() => {
                setName('');
                setDescription('');
            });
        }
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
                    <Form.Group>
                        <Form.Field>
                            <label>Data</label>
                            <SemanticDatepicker locale="pt-BR" format="DD/MM/YYYY" value={date} onChange={(e, data) => setDate(data.value as Date)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Hora</label>
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                        </Form.Field>
                    </Form.Group>
                    <Button onClick={postData} type='submit'>Salvar</Button>
                </Form>
            </Container>
        </>
    );
};

export default EventosCreate;