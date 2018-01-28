import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Sandwich from '../../components/Sandwich/Sandwich'
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls'
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Sandwich/OrderSuumary/OrderSuumary'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    pickle: 0.7
}
class SandwichBuilder extends Component {
    state = {
         ingredients: {
             salad: 0,
             tuna: 0,
             cheese: 0,
             pickle: 0,
             meat: 0
         },
         totalPrice: 4,
         purchaseable: false,
         purchasing: false   
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum,el) => {
            return sum + el
        },0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCounted = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Aux>
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}> 
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Model>
                <Sandwich ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    disabled={disableInfo}/>
            </Aux>
        );
    }
}

export default SandwichBuilder;