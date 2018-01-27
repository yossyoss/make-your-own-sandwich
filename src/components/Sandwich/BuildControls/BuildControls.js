import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Pickles', type: 'pickle'},
    {label: 'Cheese', type: 'cheese'},
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixeג(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            removed={() => props.ingredientRemoved(ctrl.type)}
            added={() => props.ingredientAdded(ctrl.type)}
            disabled={props.disabled[ctrl.type]} 
            />
        ))}
    </div>
);

export default BuildControls;