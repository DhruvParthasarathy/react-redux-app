import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer() {

    /**
     * The use selector hook directly gives access to the redux store state and we can extract the required variable and set it to a variable
     */
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)

    /**
     * Use dispatch extracts the dispatch function handler and gives access of the dispatch method of the redux store to the component
     */
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
