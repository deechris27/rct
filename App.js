import React from 'react';
import Child from './components/context/Child';
import Parent from './components/context/Parent';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';
import ErrorTest from './components/errorboundary/ErrorTest';
import PortalExample from './components/portal/PortalExample';
import ForwardExample from './components/forwardrefs/ForwardExample';
import ReducerExample from './components/usereducer/ReducerExample';


function App(){
   return <div>
       <h1>Mytidbit</h1>
       <Parent>
          <Child />
       </Parent>
       <ErrorBoundary>
           <ErrorTest />
       </ErrorBoundary>
       <PortalExample>
           <h1>Hello, I'm not rendered in root</h1>
       </PortalExample>
       <br />
       <ForwardExample /><br />
       <ReducerExample />
   </div>
}

export default App;