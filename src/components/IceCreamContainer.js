import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy cake</button>            
        </div>
    )
}

/**
 * In the below function, while mapping the state of the application to the props of the application, we mentioned the reducer to which handled the respetive prop
 * For example here we mention state.iceCream.numOfIceCreams to access the numOfIceCreams property in the state handled by the iceCreamReducer
 * @param {*} state 
 * @returns 
 */
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
