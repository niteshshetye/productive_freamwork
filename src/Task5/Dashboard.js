import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import AuthContext from './context/AuthContext'

const Dashboard = () => {
    const nevigate = useNavigate()
    const {isLogin} = useContext(AuthContext)
    useEffect(() => {
        !isLogin && nevigate('/login')
    })
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
