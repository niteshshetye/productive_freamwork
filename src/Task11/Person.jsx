import React from 'react'

const Person = ({person}) => {
    return (
        <div className='task11_person_div'>
            <h2 className='task11_person_h2'>Hi, Welcome "{person.firstName} {person.lastName}" to our React js course</h2>
        </div>
    )
}

export default Person
