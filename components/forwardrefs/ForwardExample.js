import React, {createRef} from 'react';
import ExCompo from './ExCompo';

function ForwardExample(){
    const testRef = createRef();

    const setFocus = () => {
        console.log(testRef.current.value)
        testRef.current.focus()
    }
    return(
        <div>
          <ExCompo ref={testRef} />
          <button onClick={setFocus}>Yo Yo</button>
        </div>
    )
}

export default ForwardExample;