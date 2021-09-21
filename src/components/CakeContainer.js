import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

/**
 * When you want to access the redux store in your component, you define the mapStateToProps function. It gets the redux state as a parameter which can be used to retrieve the appropriate number of properties. Here we map a variable called as numOfCakes to the numberOfCakes property in the state and make it available as a prop to the component.
 * @param {*} state 
 * @returns 
 */
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numberOfCakes
    }
}


/**
 * For dispatching actions, we use the mapDispatchToProps function. 
 * We get the dispatch method as a parameter and it allows us to map action creaters to props of out component.
 * Here map dispatching buyCake to a prop called buyCake. This allows us to call buyCake() as props.buyCake
 * The connect function connects the react component to the redux store. In our case it connects the cake container to the redux store
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


/**
 * The connect function does the following 2 actions
 * 1. It maps the state obtained from the store to the component's props
 * 2. It maps the dispatcher function to the container and makes it available as a function of the component. 
 */
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
