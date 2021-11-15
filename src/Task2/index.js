import React, {useState} from 'react';

// toster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// component
import Form from './Form';
import Button from './Button';

const Task2 = () => {
    const [formValues, setFormValues] = useState({username: '', email: '', password: ''});
    const [formError, setFormError] = useState({username: '', email: '', password: ''});
    const [formTouched, setFormTouched] = useState({username: false, email: false, password: false});

    const handleChange = e => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        setFormTouched({...formTouched, [name]: true});
    }
    const handleValidation = (values, touched) => {
        let errors = {}
        const usernameRegEx = /^[a-zA-Z_]{4,10}$/
        const emailRegEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const passwordRegEx = /^[a-zA-Z_]{4,10}$/
        if(!values.username && touched.username){
            errors = {username: 'Username is Required', ...errors}
        }else if(values.username){
            const matching = values.username.match(usernameRegEx);
            if(matching === null) {
                errors = {username: 'Username must be grater than 3 charecters', ...errors}
            }
        }
        if(!values.email && touched.email){
            errors = {email: 'Email is Required', ...errors}
        }else if(values.email){
            const matching = values.email.match(emailRegEx);
            if(matching === null) {
                errors = {email: 'Invalid Email ID', ...errors}
            }
        }
        if(!values.password && touched.password){
            errors = {password: 'Password is Required', ...errors}
        }else if(values.password){
            const matching = values.password.match(passwordRegEx);
            if(matching === null) {
                errors = {password: 'Password is to weak', ...errors}
            }
        }
        const inputErrors = Object.keys(errors);
        inputErrors.length !== 0 && inputErrors.map(inputError => (
            toast.error(errors[inputError],{
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            })
        ))
        console.log('handleValidation', errors)
        return errors
    }
    const handleEnter = e => {
        if(e.charCode === 13) {
            setFormError(handleValidation(formValues, formTouched))
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        const isErrorPresent = handleValidation(formValues, formTouched)
        setFormError(isErrorPresent)
        const inputErrors = Object.keys(isErrorPresent)
        console.log('', inputErrors)
        if(inputErrors.length !== 0){
            return toast.error('Please fill the form',{
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,  
            })
        }else{
            console.log('Form Submited');
            toast.success('Logged In succefull',{
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            })
        }
    }
    return (
        <div className='task2_container'>
            {/* <pre>{ JSON.stringify(formValues, undefined, 3)}</pre>
            <pre>{ JSON.stringify(formError, undefined, 3)}</pre> */}
            <ToastContainer />
            <form className='form_validation'>
                <div className='form_heading'>
                    <h2>Login</h2>
                </div>
                <Form 
                    values={formValues} 
                    errors={formError} 
                    touched={formTouched} 
                    handleChange={handleChange} 
                    handleEnter={handleEnter} 
                />
                <Button label='Submit' handleSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default Task2
