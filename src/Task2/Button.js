import React, { useState } from 'react'

const Button = ({label, handleSubmit}) => {
    const [changeColor, setChangeColor] = useState('black');
    const handleStyle = () => {
        console.log('handleStyle hitt...!')
        changeColor === 'black' && setChangeColor('gray');
        changeColor === 'gray' && setChangeColor('black');
    } 
    return (
        <div className='form_btn'>
            <button type='button' style={{color: 'white', outline: 'none', fontWeight: '500', letterSpacing: '2px',border: 'none',backgroundColor: `${changeColor}`}} onMouseEnter={handleStyle} onMouseLeave={handleStyle} onClick={handleSubmit}>{label}</button>
        </div>
    )
}
export default Button
