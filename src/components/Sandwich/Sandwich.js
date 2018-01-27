import React from 'react';
import classes from './Sandwich.css';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';
const sandwich = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]   // an empty array like [,,] for example
            .map((_, i) => {  
                return <SandwichIngredient key={igKey + i} type={igKey} />;
            }); 
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    },[]);
    if( transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Sandwich}>
            <SandwichIngredient type="bread-top"/>
            {transformedIngredients}
            {/* <SandwichIngredient type="tomato"/>
            <SandwichIngredient type="tuna"/>
            <SandwichIngredient type="pickle"/> */}
            <SandwichIngredient type="bread-bottom"/>
         </div>
    );
};

export default sandwich;
