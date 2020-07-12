import React, {useContext} from 'react';
import {ExampleContext} from './Parent';


function Child(){
    const {isActive, color, background, setActive} = useContext(ExampleContext);

    return(
        <div>
            {<button style={{width:'150px', height: '50px', backgroundColor: isActive ? `${background.active}` : `${background.disabled}`, color: isActive ? `${color.active}` : `${color.disabled}`}} onClick={setActive}>
                Context in Action</button>}
        </div>
    )
}

export default Child;