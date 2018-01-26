import React, { Component } from 'react';
import classes from './SandwichIngredient.css';
import PropTypes from 'prop-types';

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
                case ('cheese'):
                        ingredient = <div className={classes.Cheese}></div>;
                        break;        
                case ('tuna'):
                        ingredient = <div className={classes.Tuna}></div>;
                        break; 
                default:
                     ingredient = null;
            }
            return ingredient;
    }
}

SandwichIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};

export default SandwichIngredient;