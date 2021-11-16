import { Component } from "react";

export class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    /*
    two methods we use here 
        1) static getDerivedStateFromError which call if error 
            is present it will set the state hasError to True
        2) component Did Catch is basically help to grab the error 
            and send to Error loggin system

    How to use react-error-boundary package
        1) install the npm i react-error-boundary package
        2) wrap your component as you do for this ErrorBoundary 
        but now not this file import from 'react-error-boundary'
        3) pass to things as props a) FallbackComponent b) onError
        4) for FallBackComponent create the component which will render 
        when error occured.
        ex. FallbackComponent={FallBack}
        5) for onError create ErrorHandler and inside that do what we do in
        componentDidCatch(), note: -> ErrorHandlre get error,errorInfo this 
        things automaically.
        ex. onError={ErrorHandler} 
        const ErrorHandler(error, errorInfo){
            // logic ....
        }
        6) to show the fallback ui while interacting with event handler
        import {useErrorHandler} from  'react-error-boundary' which returns
        handleError function which we call in our catch part this catch may
        from your .catch (promises) or try catch block
        ex. catch(error){
            handleError(error)
        } 
    */
    
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo){
        console.log("Inside ComponentDidCatch", error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            return <h2 style={{textAlign: 'center'}}>Something Went Wrong</h2>
        }
        return this.props.children
    }
}