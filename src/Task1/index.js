import React from 'react'

import Counter from './Counter';
import Stopwatch from './Stopwatch';

const Task1 = () => {
    return (
        <div className='task1_div'>
            <div className='task1_counter_div'>
                <Counter /> 
            </div>
            <div className='task1_stopwatch_div'>
                <Stopwatch /> 
            </div>
        </div>
    )
}

export default Task1
