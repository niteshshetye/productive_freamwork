import React from 'react'

const Button = ({label, handleSubmit}) => {
    return (
        <div className='form_btn'>
            <button type='button' onClick={handleSubmit}>{label}</button>
        </div>
    )
}
export default Button
