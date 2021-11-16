import React, {useState, useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import {userRequest} from './axiosConfig';
import {initialValues,validationShema} from './utils'

const Task14 = () => {
    const [allDeveloper, setAllDeveloper] = useState([]);

    const handleSubmit = (values) => {
        console.log('formik',values)
    }

    return (
        <div className='task13_div'>
            <div className='task13_add_form'>
                <Formik
                    initialValues={initialValues}
                    validationShema={validationShema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className='task13_add_input'>
                            <Field name='name' placeholder='Name' />
                        </div>
                        <div className='task13_add_input'>
                            <Field type='number' name='age' placeholder='Age' />
                        </div>
                        <div className='task13_add_input'>
                            <Field type='email' name='email' placeholder='Email' />
                        </div>
                        <div className='task13_add_input'>
                            <Field name='technology' placeholder='Technology' />
                        </div>
                        <div className='task13_add_input'>
                            <Field type='number' name='experience' placeholder='Experience' />
                        </div>
                        <div className='task13_add_btn'>
                            <button type='submit'>Add</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            
        </div>
    )
}

export default Task14;

{/* <div className='task13_developer_table'>
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
    
</div> */}