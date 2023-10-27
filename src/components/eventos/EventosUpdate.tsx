import axios from "axios";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Container, Form } from "semantic-ui-react";

const EventosUpdate = ({ pid, handleId }: { pid: string, handleId: any }) => {
    const backend_url : string | undefined = ((window as any)._env_ ? (window as any)._env_.REACT_APP_BACKEND_URL : undefined) || process.env.REACT_APP_BACKEND_URL;

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');

    useEffect(() => {
        if(pid.toString() !== id.toString())
        {
            axios.get(`${backend_url}/api/eventos/${pid}`)
                .then((response) => {
                    if(response.data.data !== null)
                    {
                        var gmt = moment.tz(response.data.data, 'GMT');
                        
                        setDate(new Date(gmt.tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm')));
                        setTime(gmt.tz("America/Sao_Paulo").format('HH:mm'));
                    }
                    else
                    {
                        setDate(new Date());
                        setTime('00:00');
                    }

                    setId(response.data.id);
                    setName(response.data.nome);
                    setDescription(response.data.descricao);
                });
        }
    });

    const postData = () => {
        date.setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1]), 0);

        axios.put(`${backend_url}/api/eventos`, {
            "Id": id,
            "Nome": name,
            "Descricao": description,
            "Data": date
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
                    <Button onClick={postData} type='submit'>Salvar</Button><Button onClick={() => handleId(undefined)} type='button'>Cancelar</Button>
                </Form>
            </Container>
        </>
    );
};

export default EventosUpdate;