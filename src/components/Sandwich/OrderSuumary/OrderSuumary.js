import React from 'react';

import Aux from '../../../hoc/Auxx'
const orderSuumary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious sandwich with the following ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    )
};

export default orderSuumary;