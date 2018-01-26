import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Sandwich from '../../components/Sandwich/Sandwich'
class SandwichBuilder extends Component {
    state = {
         ingredients: {
             salad: 0,
             tuna: 0,
             cheese: 0,
             pickle: 0
         }   
    }
    render(){
        return(
            <Aux>
                <Sandwich ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default SandwichBuilder;