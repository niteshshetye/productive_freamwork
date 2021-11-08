import React from 'react'
import Input from './Input'
import Error from './Error'

const Form = ({values, touched, errors, handleChange, handleEnter}) => {
    return (
        <div className='form_inputs'>
            <Input 
                name='username' 
                value={values.username} 
                handleChange={handleChange} 
                handleEnter={handleEnter}  
            />
            <Error touched={touched.username} error={errors.username} />
            <Input 
                type='email' 
                name='email' 
                value={values.email} 
                handleChange={handleChange} 
                handleEnter={handleEnter} 
            />
            <Error touched={touched.email} error={errors.email} />
            <Input 
                type='password' 
                name='password' 
                value={values.password} 
                handleChange={handleChange} 
                handleEnter={handleEnter} 
            />
            <Error touched={touched.password} error={errors.password} />
        </div>
    )
}

export default Form
