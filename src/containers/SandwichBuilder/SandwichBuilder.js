import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Sandwich from '../../components/Sandwich/Sandwich'
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls'
class SandwichBuilder extends Component {
    state = {
         ingredients: {
             salad: 0,
             tuna: 0,
             cheese: 0,
             pickle: 0,
             meat: 0
         }   
    }
    render(){
        return(
            <Aux>
                <Sandwich ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default SandwichBuilder;