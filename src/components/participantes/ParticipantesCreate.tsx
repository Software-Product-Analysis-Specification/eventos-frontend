import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";

const ParticipantesCreate = () => {
    const backend_url : string | undefined = ((window as any)._env_ ? (window as any)._env_.REACT_APP_BACKEND_URL : undefined) || process.env.REACT_APP_BACKEND_URL;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const postData = () => {
        if(name !== '')
        {
            axios.post(`${backend_url}/api/participantes`, {
                "Nome": name,
                "Email": email,
                "Whatsapp": whatsapp
            })
            .then(() => {
                setName('');
                setEmail('');
                setWhatsapp('');
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
                        <label>E-mail</label>
                        <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Whatsapp</label>
                        <input placeholder='Whatsapp' value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>
                    </Form.Field>
                    <Button onClick={postData} type='submit'>Salvar</Button>
                </Form>
            </Container>
        </>
    );
};

export default ParticipantesCreate;