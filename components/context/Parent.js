import React, {createContext, useState} from 'react';

export const ExampleContext = createContext();

function Parent(props){
    
   const [state, setState] = useState({
       isActive: false, color: {active: 'white', disabled: 'black'}, background: {active: 'green', disabled: 'lightgray'}
    })

    const setActive = () => {
        setState(prevState =>({
            ...prevState,
            isActive: !state.isActive
        }))
    };

    console.log({...state})

   return (
       <ExampleContext.Provider value={{...state, setActive}}>
            {props.children}
       </ExampleContext.Provider>
   )
}

export default Parent;