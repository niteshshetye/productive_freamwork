import React, {useState, useEffect} from 'react'
import {userRequest} from './axiosConfig'

const Task13 = () => {
    const [allDeveloper, setAllDeveloper] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [developer, setDeveloper] = useState({id: null,name: '', age: 0, email: '', technology: '', experience: 0})
    const calculateHeader = Object.keys(developer);
    const clearDeveloper =()=>{
        setDeveloper({id: null,name: '', age: 0, email: '', technology: '', experience: 0})
    }
    const fetchData = async() => {
        try{
            const {data} = await userRequest('/developer');
            setAllDeveloper(data);
        }catch(error){
            console.log(error)
        }
    }
    
    const postDeveloper = async() => {
        try{
            const {data} = await userRequest.post('/developer', {...developer, id: Date.now()});
            setAllDeveloper([...allDeveloper, data])
        }catch(error){
            console.log(error)
        }
    }

    const editDeveloper = async(id) => {
        try{
            const newData = allDeveloper.filter(developer => developer.id !== id)
            const {data} = await userRequest.patch(`/developer/${id}`, {...developer});
            
            // console.log('data',data)
            setAllDeveloper([...newData, data])
        }catch(error){
            console.log(error)
        }
    }
    const deleteDevloper = async(id) =>{
        try{
            await userRequest.delete(`/developer/${id}`);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=> {
        fetchData();
    },[]);

    const handleDelete = (id) => {
        const newDeveloper = allDeveloper.filter(developer => developer.id !== id);
        setAllDeveloper([...newDeveloper]);
        deleteDevloper(id);
        fetchData();
    }

    const loadData = (id) => {
        const editDeveloper = allDeveloper.filter(developer=> developer.id === id)
        setDeveloper({...editDeveloper[0]})
        setShowEdit(true)
        // console.log(editDeveloper[0])
    }

    const handleEdit = (e,id) => {
        e.preventDefault();
        editDeveloper(id);
        clearDeveloper();
        setShowEdit(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postDeveloper();
        clearDeveloper();
        fetchData();
    }


    return (
        <div className='task13_div'>
            <div className='task13_add_form'>
                <form> 
                    <div className='task13_add_input'>
                        <label>Name: </label>
                        <input type='text' value={developer.name} onChange={(e)=> setDeveloper({...developer, name: e.target.value})} />
                    </div>
                    <div className='task13_add_input'>
                        <label>Age: </label>
                        <input type='number' value={developer.age} onChange={(e)=> setDeveloper({...developer, age: e.target.value})} />
                    </div>
                    <div className='task13_add_input'>
                        <label>Email: </label>
                        <input type='email' value={developer.email} onChange={(e)=> setDeveloper({...developer, email: e.target.value})} />
                    </div>
                    <div className='task13_add_input'>
                        <label>Technology: </label>
                        <input type='text' value={developer.technology} onChange={(e)=> setDeveloper({...developer, technology: e.target.value})} />
                    </div>
                    <div className='task13_add_input'>
                        <label>Experience: </label>
                        <input type='number' value={developer.experience} onChange={(e)=> setDeveloper({...developer, experience: e.target.value})} />
                    </div>
                    <div className='task13_add_btn'>
                        {showEdit? <button type='button' onClick={(e)=> handleEdit(e,developer.id)}>Edit</button>: <button type='submit' onClick={handleSubmit}>Add</button>}
                    </div>
                </form>
            </div>
            <div className='task13_developer_table'>
                {
                    allDeveloper.length === 0? <h2>No Developers!!!</h2>:(
                        <table>
                            <thead>
                                <tr>
                                    {
                                        calculateHeader.map(headers => (
                                            <th key={headers}>{headers}</th>
                                        ))
                                    }
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allDeveloper.map(developer => (
                                        <tr key={developer.id}>
                                            <td>{developer.id}</td>
                                            <td>{developer.name}</td>
                                            <td>{developer.age}</td>
                                            <td>{developer.email}</td>
                                            <td>{developer.technology}</td>
                                            <td>{developer.experience+''} Years</td>
                                            <td><button onClick={() => loadData(developer.id)}>Edit</button></td>
                                            <td><button onClick={() => handleDelete(developer.id)}>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
                
            </div>
        </div>
    )
}

export default Task13;