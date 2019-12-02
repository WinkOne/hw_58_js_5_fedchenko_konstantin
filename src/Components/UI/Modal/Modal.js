import React, {Fragment} from 'react';
import './Modal.css'
import Backdrop from "../Backdrop/Backdrop";


const Modal = (props) => {
    return (
        <Fragment>
            <div className='Modal' style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                <div className='modalTitle'>
                    <h1>{props.title}</h1>
                    <button onClick={props.close} className='modalBtn'> &#10008;</button>
                </div>
                <hr/>
                {props.children}
            </div>
            <Backdrop show={props.show}/>
        </Fragment>
    );
};

export default Modal;