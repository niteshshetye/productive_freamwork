import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

const Register = () => {
    const {registerValue, setRegisterValue} = useContext(AuthContext)
    const nevigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!registerValue.username || !registerValue.email || !registerValue.password){
            alert('fill the form')
        }else{
            localStorage.setItem('authUser', JSON.stringify(registerValue));
            nevigate('/login');
            setRegisterValue({username: '', email: '', password: ''})
        }

    }
    return (
        <div className='register_container'>
            {/* <pre>{JSON.stringify(registerValue, undefined, 3)}</pre> */}
            <h4>Register</h4>
            <form>
                <div className='register_input'>
                    <input type='text' placeholder='Enter Username' value={registerValue.username} onChange={e => setRegisterValue({...registerValue, username: e.target.value})} />
                    <input type='email' placeholder='Enter Email' value={registerValue.email} onChange={e => setRegisterValue({...registerValue, email: e.target.value})} />
                    <input type='password' placeholder='Enter Password' value={registerValue.password} onChange={e => setRegisterValue({...registerValue, password: e.target.value})} />
                </div>
                <div className='register_btn'>
                    <button type='submit' onClick={handleSubmit}>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Register
