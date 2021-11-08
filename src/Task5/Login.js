import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

const Login = () => {
    const {loginValue, setLoginValue, setIsLogin} = useContext(AuthContext)
    const nevigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!loginValue.username || !loginValue.email || !loginValue.password){
            alert('fill the form')
        }else{
            const authUser = JSON.parse(localStorage.getItem('authUser'))
            if(authUser !== null) {
                const {username, email, password} = authUser;
                const validUser = (loginValue.username === username && loginValue.email === email && loginValue.password === password)
                if(validUser){
                    nevigate('/')
                    setIsLogin(true)
                    setLoginValue({username: '', email: '', password: ''})

                }else{
                    alert('Wrong Creadentials')
                }
            }else{
                alert('Dont Have Account')
            }
        }

    }
    return (
        <div className='register_container'>
            <h4>Login</h4>
            <form>
                <div className='register_input'>
                    <input type='text' placeholder='Enter Username' value={loginValue.username} onChange={e => setLoginValue({...loginValue, username: e.target.value})} />
                    <input type='email' placeholder='Enter Email' value={loginValue.email} onChange={e => setLoginValue({...loginValue, email: e.target.value})} />
                    <input type='password' placeholder='Enter Password' value={loginValue.password} onChange={e => setLoginValue({...loginValue, password: e.target.value})} />
                </div>
                <div className='register_btn'>
                    <button type='submit' onClick={handleSubmit}>Login</button>
                </div>
                <div className='link'>
                    <p>Dont have Account? <Link to='/register'>signUp</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
