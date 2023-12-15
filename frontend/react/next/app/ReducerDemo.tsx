import React, { useState, useReducer, Reducer } from 'react';
import { useImmerReducer } from 'use-immer';

// NOTE: useReducer
interface State {
    count: number
}
interface Action {
    type: 'inc' | 'dec'
}

const reducer: Reducer<State,Action> = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 }
        case 'dec':
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const inc = () => {
        dispatch({
            type: 'inc'
        })
    }
    const dec = () => {
        dispatch({
            type: 'dec'
        })
    }
    return (
        <>
            <p>Count:{state.count}</p>
            <button onClick={inc}>➕</button>
            <button onClick={dec}>➖</button>
        </>
    )
}


// NOTE: useState
// export default function Demo() {
//     const [count, setCount] = useState(0)
//     const inc = () => {
//         setCount(count + 1)
//     }
//     const dec = () => {
//         setCount(count - 1)
//     }
//     return (
//         <>
//             <p>Count: {count}</p>
//             <button onClick={inc}>+</button>
//             <button onClick={dec}>-</button>
//         </>
//     )
// }
