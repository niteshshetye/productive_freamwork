import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {initialValues, formSchema} from './utils'
import { userRequest } from './axiosConfig';


const Task14 = () => {
    const [allDeveloper, setAllDeveloper] = useState([]);
    const [editDeveloper, setEditDeveloper] = useState(null);
    const [isAddMode, setIsAddMode] = useState(true);

    // fetch
    const get = async() => {
        try{
            const {data} = await userRequest(`/developer`);
            setAllDeveloper([...data])
        }catch(error){
            console.log(error)
        }
    }
    // post 
    const post = async(values) => {
        try{
            const {data} = await userRequest.post(`/developer`, {...values, id: Date.now()});
            setAllDeveloper([...allDeveloper, data]);
        }catch(error){
            console.log(error)
        }
    }
    // put
    const edit = async(values) => {
        try{
            const {data} = await userRequest.put(`/developer/${editDeveloper.id}`, {...values});
            setEditDeveloper(null);
            setIsAddMode(true);
        }catch(error){
            console.log(error)
        }
    }
    // delete
    const deleteData = async (id) => {
        await userRequest.delete(`/developer/${id}`);
    }

    useEffect(()=> {
        get()
    }, []);

    useEffect(()=> {
        get()
    }, [isAddMode]);

    const onSubmit = (values, {resetForm}) => {
        if(isAddMode){
            post(values);
        }else{ 
            edit(values);   
        }
        resetForm();
    }

    const loadEditData = (id) => {
        setIsAddMode(false);
        const editData = allDeveloper.filter(developer => developer.id === id);
        setEditDeveloper(editData[0]);
    }

    const handleDelete = (id) => {
        const filterData = allDeveloper.filter(developer => developer.id !== id);
        setAllDeveloper([...filterData]);
        deleteData(id);
    }

    return (
        <div className='task13_div'>
            <div className='task13_add_form'>
                <Formik
                    initialValues={editDeveloper || initialValues}
                    validationSchema={formSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                        <Form>
                            <div className='task13_add_input'>
                                <Field name='name' placeholder='Name' />
                                <ErrorMessage name='name'>{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className='task13_add_input'>
                                <Field type='number' name='age' placeholder='Age' />
                                <ErrorMessage name='age' >{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className='task13_add_input'>
                                <Field type='email' name='email' placeholder='Email' />
                                <ErrorMessage name='email' >{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className='task13_add_input'>
                                <Field name='technology' placeholder='Technology' />
                                <ErrorMessage name='technology' >{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className='task13_add_input'>
                                <Field type='number' name='experience' placeholder='Experience' />
                                <ErrorMessage name='experience' >{msg => <p style={{color: 'red'}}>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className='task13_add_btn'>
                                {
                                    isAddMode? <button type='submit'>Add</button>
                                    : <button type='submit'>Edit</button>
                                }
                            </div>
                        </Form>
                </Formik>
            </div>
            <div className='task13_developer_table'>
                {
                    allDeveloper.length === 0? <h2>No Developers!!!</h2>:(
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Technology</th>
                                    <th>Experience</th>
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
                                            <td><button onClick={() => loadEditData(developer.id)}>Edit</button></td>
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

export default Task14;