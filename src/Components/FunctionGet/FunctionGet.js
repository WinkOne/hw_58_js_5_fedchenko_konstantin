import React, {Component, Fragment} from 'react';
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Alert from "../UI/Alert/Alert";


class  FunctionGet  extends Component {
    state = {
        purchasing: false
    };
    purchaseHandler = () => {
        this.setState({purchasing: true})
    };
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };
    someHandler = () => {
        alert('You Continued!')
    };
    render() {

        return (
            <Fragment>
                <Modal
                    show={this.state.purchasing}
                    close={this.purchaseCancelHandler}
                    title="Some kinda modal title"
                >
                    <p>This is modal content</p>
                </Modal>
                <Button purchase={this.purchaseHandler}/>
                <Alert
                    type="warning"
                    dismissed
                    click={this.someHandler}
                >This is a warning type alert</Alert>
                <Alert click={this.someHandler} type="success">This is a success type alert</Alert>
            </Fragment>
        )
    }
}

export default FunctionGet;
