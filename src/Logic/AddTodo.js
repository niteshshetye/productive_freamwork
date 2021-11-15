import React, { useState } from 'react'

const AddTodo = ({setFindTodo}) => {
    const [find, setFind] = useState()
    const handleClick = (e) => {
        e.preventDefault();
        setFindTodo(find)
    }
    return (
        <form>
            <input type='text' value={find} onChange={e => setFind(e.target.value)} />
            <button onClick={handleClick}>Find Todo</button>
        </form>
    )
}

export default AddTodo
