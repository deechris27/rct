import React from 'react';
import {createPortal} from 'react-dom';

function PortalExample(props){
    const port = document.getElementById('porty');
    return createPortal(props.children, port)
}

export default PortalExample;