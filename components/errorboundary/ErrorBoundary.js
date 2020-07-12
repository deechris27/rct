import React from 'react';

class ErrorBoundary extends React.Component{

    state = {
        hasError: null
    }

    static getDerivedStateFromError(error){
       return {hasError: error}
    }

    componentDidCatch(error, info){
        console.error("err..", error);

        console.info("info..", info)
    }

    render(){
        { return this.state.hasError ? <h2>Error Ocurred and it's caught by error boundary</h2> : this.props.children}
    }

}
export default ErrorBoundary;