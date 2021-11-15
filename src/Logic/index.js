import React,{useState, useEffect} from 'react'
import AddTodo from './AddTodo'
import { userRequest } from './axiosConfig'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [singleTodo, setSingleTodo] = useState([])
    const [findTodo,setFindTodo] = useState();
    const [showFind, setShowFind] = useState(false)
    useEffect(() => {
        const getTodos = async () => {
            try{
                const {data} = await userRequest('/todos');
                const sortData = data.slice(0, 10)
                setTodos(sortData)
            }catch(error){
                console.log(error)
            }
        }
        getTodos()
    }, []);

    useEffect(()=> {
        const findTodos = async () => {
            try{
                const {data} = await userRequest(`/todos?id=${findTodo}`);
                setSingleTodo(data)
            }catch(error){
                console.log(error)
            }
        }
        findTodos()
    }, [findTodo])
    const handleFindTodo = () => {
        setShowFind(true)
    }   
    return (
        <div>
            <h1>Todos</h1>
            {
                singleTodo.length === 0? todos.map(todo => (
                    <main key={todo.id}>
                        <h4>Id: {todo.id}</h4>
                        <h4>Title: {todo.title}</h4>
                    </main>
                )) : singleTodo.map(todo => (
                    <main key={todo.id}>
                        <h4>Id: {todo.id}</h4>
                        <h4>Title: {todo.title}</h4>
                    </main>             
                ))
                
                
            }
            <button onClick={handleFindTodo}>Find Todo</button>
            {
                showFind && <AddTodo setFindTodo={setFindTodo} />
            }
        </div>
    )
}

export default Todo
