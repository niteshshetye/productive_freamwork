import React, {useRef, useState, useEffect} from 'react'


/*
    step1: initalize ref (line number 9 and 10)
    step2: set ref in input(in our case) (line number 26 and 30 ) 
    step3: use it where you need (line number 17,23,24, 26,27 )

    Remember: 
        1) use Ref return an object with only one method .current
        2) use Ref does not re-render the component its just mutate the object 
        3) using ref you can access that DOM Element 
*/
const Task10 = () => {
    const [errors, setErrors] = useState({})
    // initalize ref here
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        // focus on first render
        emailRef.current.focus()
    },[]);


    const validation = () => {
        const errors = {}
        if(!emailRef.current.value){
            errors[emailRef.current.name] = "Email Required"
        }
        if(!passwordRef.current.value){
            errors[passwordRef.current.name] = "Password Required"
        }
        setErrors(errors)
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validation();
        Object.keys(errors).length === 0 && alert('Logged In...!');
        console.log('errors state: ', errors)
    }
    return (
        <div className='task10_container'>
            <div className='task10_heading'>
                <h1 className='task10_heading_h1'>Login</h1>
            </div>
            <div className='task10_body'>
                <form onSubmit={handleSubmit} className='task10_form'>
                    <div className='task10_input'>
                        <input type='email' name='email' placeholder='Enter Email Id' ref={emailRef} />
                        { errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className='task10_input'>
                        <input type='password' name='password' placeholder='Enter Password' ref={passwordRef} />
                        { errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div className='task10_btn'>
                        <button type='submit' className='btn10'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Task10
