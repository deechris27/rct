import React, {forwardRef} from 'react';

const ExCompo = forwardRef((props, ref)=>{

    let testy = () => {

    };
    
    return(
        <div>
            <input type="text" value="child input" ref={ref} onChange={testy}/>
        </div>
    )
});

// const ExCompo = (props, ref)=>{
//     return(
//         <div>
//             <input type="text" placeholder="forward ref"/>
//         </div>
//     )
// }

// export default forwardRef(ExCompo);

export default ExCompo;