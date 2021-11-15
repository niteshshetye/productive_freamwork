import React from 'react'
import './App.css'

// import Task2 from './Task2'
// import Task3 from './Task3'
// import Task4 from './Task4'

// ************************** Task 5 and Task 7(Add lazy loading) **************************
// import {Route, Routes} from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import AuthState from './Task5/context/AuthState'

// import NavBar from './Task5/NavBar'
// const Login = lazy(() => import('./Task5/Login'));
// const Register = lazy(() => import('./Task5/Register'));
// const Dashboard = lazy(() => import('./Task5/Dashboard'));
// const AuthState = lazy(() => import('./Task5/AuthState'));

/* 
<AuthState>
    <NavBar />
        <Routes>
            <Route exact path="/" element={
                    <Suspense fallback={<h1 className='lazy_loading'>Loading Dashbord Page...!</h1>}>
                        <Dashboard/>
                    </Suspense>
                } 
            />
            <Route exact path="login" element={
                    <Suspense fallback={<h1 className='lazy_loading'>Loading Login Page...!</h1>}>
                        <Login/>
                    </Suspense>
                }  
            />
            <Route exact path="register" element={
                    <Suspense fallback={<h1 className='lazy_loading'>Loading Register Page...!</h1>}>
                        <Register />
                    </Suspense>
                }   
            />
        </Routes>
</AuthState> 

*/

// ************************** Task 6 **************************
// import { Routes, Route } from 'react-router-dom'
// import Home from './Task6/components/Home'
// import About from './Task6/components/About'
// import Contact from './Task6/components/Contact'
// import Dashbord from './Task6/components/Dashbord'
// import NavBar from './Task6/components/NavBar'
/* 
<NavBar />
<Routes>
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/dashbord' element={<Dashbord />} />
    <Route path='/' element={<Home />} />
</Routes> 
*/

// ************************** Task 8 **************************
// import Task8 from './Task8'
// json server create in Folder db -> db.json

// ************************** Task 8 **************************
import Task9 from './Task9'

const App = () => {
    return (
        <>
            <Task9 />
        </>
    )
}

export default App
