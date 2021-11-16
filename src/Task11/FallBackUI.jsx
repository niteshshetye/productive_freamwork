import React from 'react'

const FallBackUI = ({error, resetErrorBoundary}) => {
    return (
        <div role="alert" className='task11_fallback_div'>
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default FallBackUI
