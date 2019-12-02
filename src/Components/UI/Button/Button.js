import React, {Fragment} from 'react';
import './Button.css'

const Button = (props) => {
    return (
       <Fragment>
           <button onClick={props.purchase} className='btn btnModal'>Get Modal!</button>
       </Fragment>
    );
};

export default Button;