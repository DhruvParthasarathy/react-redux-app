import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";


/**
 * When we have multiple reducers combined to a single root reducer, we will need keys to access the state handled by each reducer.
 * In each component while mapping the state to it's props, we use the keys used below to map the state handled by the appropriate reducer
 */
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer
})

export default rootReducer

