import React, {useReducer} from 'react';

const init = 0
const myReducer = (state, action) => {
     switch(action.type){
         case 'increment':
             return state + 1
         case 'decrement':
             return state - 1
         case 'reset':
             return init
         default:
             return state
     }
};

function ReducerExample(){
    const [count, dispatch] = useReducer(myReducer, init)

    const add = () => {
        dispatch({type: 'increment'})
    }

    const sub = () => {
        dispatch({type: 'decrement'})
    }

    const reset = () => {
        dispatch({type: 'reset'})
    }

    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={add} style={{margin: '10px'}}>Increment</button>
            <button onClick={sub}>Decrement</button>
            <button onClick={reset} style={{margin: '10px'}}>Reset</button>
        </div>
    )
}

export default ReducerExample;