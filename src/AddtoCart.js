import React from 'react';

const addToCart = ({onclick, val}) => {
    return (
        <button onClick= {onClick}>{val}</button>
    )
}

export default addToCart;