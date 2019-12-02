import React from 'react';
import './Alert.css'


const Alert = (props) => {
    return (
        <div onClick={props.dismissed ? undefined : props.click} className={props.type}>
            {props.children}
            <button style={{
                display: props.dismissed ? 'block': 'none'
            }} onClick={props.click} className='FirstAlertBtn'> &#10008;</button>
        </div>

    );
};

export default Alert;