import React from 'react';

const Beer = (props) => {
    const styles = {
        width: '100px',
        height: '50px',
        borderRadius: '15px',
        padding: '10px',
        marginLeft: '15px'
    }
    return (<li>
        <button style={styles} onClick={props.showBeerDetails}>{props.children}</button>
        <button style={styles} onClick={props.edit}>Edit</button>
        <button style={styles} onClick={props.removeBeer}>Delete</button>
    </li>)
}
export default Beer;