import React from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxx'
const orderSuumary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        if (props.ingredients[igKey] > 0){
            return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        } else{
            return null;
        }     
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious sandwich with the following ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSuumary;