import React from 'react'

const Button = ({label, handler, type='button'}) => {
    return (
        <button type={type} onClick={handler}>{label}</button>        
    )
}

export default Button
