import React, {useState} from 'react'
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
                errors = {password: 'Password must be grater than 3 charecters', ...errors}
            }
        }
        return errors
    }
    const handleEnter = e => {
        if(e.charCode === 13) {
            setFormError(handleValidation(formValues, formTouched))
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        setFormError(handleValidation(formValues, formTouched))
        if(Object.keys(formError).length !== 0){
            console.log('Check Feild Values')
        }else{
            console.log('Form Submited');
        }
    }
    return (
        <div className='task2_container'>
            {/* <pre>{ JSON.stringify(formValues, undefined, 3)}</pre>
            <pre>{ JSON.stringify(formError, undefined, 3)}</pre> */}
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
