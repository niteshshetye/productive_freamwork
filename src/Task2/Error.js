import React from 'react'

const Error = ({touched, error}) => {
    return (
        <>
            {(touched && error) && <p className='error'>{error}</p>}
        </>
    )
}

export default Error
