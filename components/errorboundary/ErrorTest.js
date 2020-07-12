import React, {useState} from 'react';

function ErrorTest(){

   const [ex, setEx] = useState({name: 'deeps'});

   const buttonClick = () => {
       try{
            if(1!==2){
                throw "error occurred"
            }else{
                console.log("no problem")
            }
       }catch{
          console.error("something wrong in event handler")
       }
   };

   const forEB = () => {
       setEx({name: 'dee'})
   }

   if(ex.name==='dee'){
       throw new Error('Error boss..')
   }else{
       return (
           <div>
              <h3>EB doesn't handle event handlers, SSR, EB itself, setTimeout or requestAnimationFrame</h3>
              <h4>EB works on render, lifecycle methods and constructor</h4>
              <button onClick={buttonClick} style={{margin: '10px'}}>Check EB fail in event handlers</button>
              <button onClick={forEB}>Check EB in action</button>
           </div>
       
       )
   }
}

export default ErrorTest;