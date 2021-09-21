import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyChocolate} from '../redux'
function ChocolateContainer() {

    const numChocolates  = useSelector(state => state.chocolate.numberOfChocolates)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of chocolates - {numChocolates}</h2>
            <button onClick={() => dispatch(buyChocolate())}>Buy chocolate</button>
        </div>
    )
}

export default ChocolateContainer
