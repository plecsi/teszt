import React, { useState } from 'react';

const Coins = props => {
    const [style, setStyle] = useState([])

    const onClick = e => {
        e.preventDefault();
        props.onClickedCoin(e);
        setStyle({opacity: 0})
    }

    return <button className={`btn btn-coins btn-coins-${props.coin}`} style={style} value={props.coin} onClick={onClick}><span className="sr-only">{props.coin}</span></button>
}

export default Coins;