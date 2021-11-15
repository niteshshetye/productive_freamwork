import React,{useState, useEffect} from 'react'

import {userRequest} from './axiosConfig';
import Model from './Model';

const Task8 = () => {
    const [todos, setTodos] = useState([]);
    const [showModel, setShowModel] = useState(false);

    // const [error, setError] = useState();
    const fetchTodos = async () => {
        try{
            const {data} = await userRequest('/todos');
            setTodos(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchTodos();
    },[]);

    
        
    const handleModel = () => {
        // console.log('model hit...!')
        setShowModel(true);
    }
    return (
        <>
            <nav className='task8_nav'>
                <button type='button'  className='task8_addTodo' onClick={handleModel}>Add Todo</button>
            </nav>
            {
                showModel && <Model todos={todos} setTodos={setTodos} setShowModel={setShowModel} />
            }
            <div className='task8_container'>
                <h1 className='task8_h1'>Todos List</h1>
                {
                    todos.length === 0? <h2>Loading...!</h2>: (
                        todos.map(todo => (
                            <div key={todo.id} className='task8_info'>
                                <h2><span>Title: </span>{todo.title+''}</h2>
                                <h2><span>Status: </span>{todo.status+''}</h2>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default Task8
