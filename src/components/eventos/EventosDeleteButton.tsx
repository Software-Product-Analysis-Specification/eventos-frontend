import axios from 'axios'
import { Component } from 'react'
import { Button, ButtonProps, Confirm } from 'semantic-ui-react'

class ConfirmExampleConfirm extends Component<ButtonProps, {}> {

    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    confirm = () => {
        axios.delete(`https://backend.eventos.fernandohara.com.br/api/eventos/${this.props.data.id}`)
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

export default ConfirmExampleConfirm;