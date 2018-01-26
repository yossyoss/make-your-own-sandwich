import React, { Component } from 'react';
import classes from './SandwichIngredient.css';
import propTypes from 'prop-types';

class SandwichIngredient extends Component {
    render(){
        let ingredient = null;
        
            switch(this.props.type) {
                case ('bread-bottom'): 
                    ingredient = <div className={classes.BreadBottom}></div>;
                    break;
                case ('bread-top'): 
                    ingredient = (
                        <div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>);
                    break;
                case ('meat'):
                        ingredient = <div className={classes.Meat}></div>;
                        break;
                case ('salad'):
                        ingredient = <div className={classes.Salad}></div>;
                        break;
                case ('tomato'):
                        ingredient = <div className={classes.Tomato}></div>;
                        break;
                case ('cheese'):
                        ingredient = <div className={classes.Cheese}></div>;
                        break;        
                case ('tuna'):
                        ingredient = <div className={classes.Tuna}></div>;
                        break; 
                case ('pickle'):
                        ingredient = <div className={classes.Pickle}></div>;
                        break; 
                default:
                     ingredient = null;
            }
            return ingredient;
    }
}

SandwichIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default SandwichIngredient;