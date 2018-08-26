import React from 'react';

const Beer = (props) => {
    return (<li>
        <button onClick={props.showBeerDetails}>{props.children}</button>
        <button onClick={props.removeBeer}>Delete</button>
    </li>)
}
export default Beer;