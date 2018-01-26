import React from 'react';
import classes from './Sandwich.css';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';
const sandwich = (props) => {
    return(
        <div className={classes.Sandwich}>
            <SandwichIngredient type type="bread-top"/>
            <SandwichIngredient type type="cheese"/>
            <SandwichIngredient type type="meat"/>
            <SandwichIngredient type type="bread-bottom"/>
         </div>
    );
};

export default sandwich;
