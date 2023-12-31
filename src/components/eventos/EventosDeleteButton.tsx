import axios from 'axios'
import { Component } from 'react'
import { Button, ButtonProps, Confirm } from 'semantic-ui-react'

class EventosDeleteButton extends Component<ButtonProps, {}> {
    
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    confirm = () => {
        const backend_url : string | undefined = ((window as any)._env_ ? (window as any)._env_.REACT_APP_BACKEND_URL : undefined) || process.env.REACT_APP_BACKEND_URL;

        axios.delete(`${backend_url}/api/eventos/${this.props.data.id}`)
            .then(() => {
                this.setState({ open: false });
            });
    };

    render() {
        return (
            <div>
                <Button onClick={this.open}>Excluir</Button>
                <Confirm
                    content={`Você tem certeza que deseja excluir '${this.props.data.nome}'?`}
                    confirmButton="Sim"
                    cancelButton="Não"
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.confirm}
                />
            </div>
        )
    }
};

export default EventosDeleteButton;