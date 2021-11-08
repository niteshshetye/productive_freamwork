import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext'
const NavBar = () => {
    const {isLogin, setIsLogin} = useContext(AuthContext)
    const nevigate = useNavigate()
    const handleLogin = () => {
        nevigate('/login')
    }
    const handleLogout = () => {
        localStorage.removeItem('authUser');
        setIsLogin(false)
        nevigate('/register')
    }
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <h3>Version 6 React Router Dom</h3>
            </div>
            <ul>
                {
                    isLogin? <li onClick={handleLogout}>Logout</li>: <li onClick={handleLogin}>Login</li>
                }
            </ul>
        </nav>
    )
}

export default NavBar
