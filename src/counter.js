import React, { useReducer } from "react";


const initialState = {
    count: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        default:
            throw Error('Unknow action')
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter