import React from 'react';
const Display = ({firstNum, currentPrice}) => {
    if(currentPrice) {
        return <div className='display-bg'>{currentPrice}</div>
    } 
        
    return <div className='display-bg'>{firstNum}</div>
    
}

export default Display;