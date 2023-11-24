import axios from "axios";
import { useEffect, useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Container, Form, Select } from "semantic-ui-react";

const EventoParticipantesCreate = () => {
    const backend_url : string | undefined = ((window as any)._env_ ? (window as any)._env_.REACT_APP_BACKEND_URL : undefined) || process.env.REACT_APP_BACKEND_URL;

    const [evento, setEvento] = useState(0);
    const [participante, setParticipante] = useState(0);

    const [eventoAPIData, setEventoAPIData] = useState([]);
    const [participanteAPIData, setParticipanteAPIData] = useState([]);
    
    useEffect(() => {
        axios.get(`${backend_url}/api/eventos`)
            .then((response) => {
                let eventos = response.data.map((evento: { id: any; nome: any; }) => {
                    return { key: evento.id, text: evento.nome, value: evento.id }
                })
                setEventoAPIData(eventos);
            })
        axios.get(`${backend_url}/api/participantes`)
            .then((response) => {
                let participantes = response.data.map((participante: { id: any; nome: any; }) => {
                    return { key: participante.id, text: participante.nome, value: participante.id }
                })
                setParticipanteAPIData(participantes);
            })
    })

    const postData = () => {
        if(evento > 0 && participante > 0)
        {
            axios.post(`${backend_url}/api/eventoparticipantes`, {
                "Evento": evento,
                "Participante": participante
            })
        }
    };

    return (
        <>
            <Container>
                <Form className="create-form">
                    <Form.Field>
                        <label>Evento</label>
                        <Select options={eventoAPIData} onChange={(_e, data) => setEvento(data.value as number)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Participante</label>
                        <Select options={participanteAPIData} onChange={(_e, data) => setParticipante(data.value as number)}></Select>
                    </Form.Field>
                    <Button onClick={postData} type='submit'>Salvar</Button>
                </Form>
            </Container>
        </>
    );
};

export default EventoParticipantesCreate;