import React from 'react'
import {Route, Routes} from 'react-router-dom'

// import Task2 from './Task2'
// import Task3 from './Task3'
// import Task4 from './Task4'

// task 5
import NavBar from './Task5/NavBar'
import Login from './Task5/Login'
import Register from './Task5/Register'
import Dashboard from './Task5/Dashboard'
import AuthState from './Task5/context/AuthState'


import './App.css'

const App = () => {
    return (
        <>
            <AuthState>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Dashboard/>} />
                    <Route exact path="login" element={<Login/>} />
                    <Route exact path="register" element={<Register/>} />
                </Routes>
            </AuthState>
        </>
    )
}

export default App
