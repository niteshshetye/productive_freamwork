import React,{useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='task1_count'>
            <div className='task1_count_heading'>
                <h2 className='task1_count_h2'>
                    {count}
                </h2>
            </div>
            <div className='task1_count_body'>
                <button className='task1_count_start'>Start</button>
                <button className='task1_count_stop'>Stop</button>
                <button className='task1_count_reset'>Reset</button>
            </div>
        </div>
    )
}

export default Counter
