import React, { useState } from 'react'

const Count = () => {
    const [count , setCount] = useState(0)
    
    const handleIncrement = () => {
        setCount(count+1);
    }
    return (
        <div className='task11_count_div'>
            <div className='task11_count_heading'>
                <h2>{count}</h2>
            </div>
            <div className='task11_count_btn'>
                <button onClick={handleIncrement}>Increment</button>
            </div>
           
        </div>
    )
}

export default Count
