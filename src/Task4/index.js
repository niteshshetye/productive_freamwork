import React, { useState } from 'react'
import {Switch} from 'react-switch-input'


const Task4 = () => {
    const [display, setDisplay] = useState(false);
    const handleChange = e => {
        const checked = e.target.checked
        setDisplay(checked)
    }
    return (
        <div className='task4_container'>
            <div className='task4_heading'>
                <h1>
                    Show Details
                </h1>
            </div>
            <Switch 
                checked={display}
                onChange = {handleChange}
            />
            {
                display && <div className='task4_details'>
                        <h4>Details</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
            }
        </div>
    )
}

export default Task4
