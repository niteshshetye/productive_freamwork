import React from 'react'

const Input = ({type='text', name, value, handleChange, handleEnter}) => {
    return (
        <>
            <input type={type} name={name} placeholder={name} value={value} onChange={handleChange} onKeyPress={handleEnter}  />
        </>
    )
}

export default Input
