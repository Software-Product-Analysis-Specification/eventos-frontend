import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";

const ParticipantesUpdate = ({ pid, handleId }: { pid: string, handleId: any }) => {
    const backend_url : string | undefined = process.env.REACT_APP_BACKEND_URL;

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    useEffect(() => {
        if(pid.toString() !== id.toString())
        {
            axios.get(`${backend_url}/api/participantes/${pid}`)
                .then((response) => {
                    setId(response.data.id);
                    setName(response.data.nome);
                    setEmail(response.data.email);
                    setWhatsapp(response.data.whatsapp);
                });
        }
    });

    const postData = () => {
        axios.put(`${backend_url}/api/participantes`, {
            "Id": id,
            "Nome": name,
            "Email": email,
            "Whatsapp": whatsapp
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
                        <label>E-mail</label>
                        <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Whatsapp</label>
                        <input placeholder='Whatsapp' value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                    </Form.Field>
                    <Button onClick={postData} type='submit'>Salvar</Button><Button onClick={() => handleId(undefined)} type='button'>Cancelar</Button>
                </Form>
            </Container>
        </>
    );
};

export default ParticipantesUpdate;