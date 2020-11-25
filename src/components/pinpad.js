import React from 'react';

const PinPad = props => {
    const onClick = e => {
        e.preventDefault();
        props.onClickedNumber(e);
    }
    return <button className="btn btn-pinpad" value={props.number} onClick={onClick}>{props.number}</button>
}

export default PinPad;