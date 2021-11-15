import React,{useState} from 'react'
import {userRequest} from './axiosConfig';

const Model = ({todos, setTodos, setShowModel}) => {
    const [addTodo, setAddTodo] = useState('')
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(addTodo.length !== 0 ){
            const postTodos = async() => {
                try{
                    const sendData = {id: Date.now().toString(),title: addTodo, status: false}
                    const {data} = await userRequest.post('/todos', sendData)
                    setTodos([...todos, data])
                }catch(error){
                    console.log(error)
                }
            }
            postTodos();
            setShowModel(false);
            setAddTodo('');
        }else{
            setError(true)
        }
    }
    return (
        <div className='task8_model'>
            <h2>Add Todo</h2>
            <form className='task8_model_form' onSubmit={handleSubmit}>
                <input type="text" value={addTodo} onChange={(e) => setAddTodo(e.target.value)} placeholder='Title' />
                {error && <p style={{color: 'red'}}>Please Enter Todo</p>}
                <button type='submit' className='task8_model_btn'>Add</button>
            </form>
        </div>
    )
}

export default Model
