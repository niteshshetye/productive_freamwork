import React, { useState } from 'react'
import Count from './Count';
import Button from './Button';

const Task3 = () => {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        if(count === 10) return
        setCount(count+1);
    }
    const handleDecrease = () => {
        if(count === 0) return
        setCount(count-1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className='task3_container'>
            <div className='task3_body'>
                <Count count={count} />
            </div>
            <div className='task3_oprations'>
                <Button handler={handleIncrease} label='Increase' />        
                <Button handler={handleDecrease} label='Decrease' />        
                <Button type='reset' handler={handleReset} label='Reset' />        
            </div>
        </div>
    )
}

export default Task3
