import React, { useReducer } from 'react';

const countReducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 }
        case 'dec':
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function Demo() {

    const [state, dispatch] = useReducer(countReducer,{count: 0})

    const inc = () => {
        dispatch({ type: 'inc' })
    }
    const dec = () => {
        dispatch({ type: 'dec' })
    }


    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    )
}

