import {BUY_CHOCOLATE} from "./chocolateActionTypes"

const initialChocolateState = {
    numberOfChocolates: 30
}

const chocolateReducer = (state = initialChocolateState, action) =>  {
    switch ( action.type ) { 

        case BUY_CHOCOLATE : 
            return {
                ...state,
                numberOfChocolates: state.numberOfChocolates - 1
            }   
        default : 
            return state     
    }
}

export default chocolateReducer