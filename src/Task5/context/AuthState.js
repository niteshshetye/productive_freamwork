import {useState} from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
    const [registerValue, setRegisterValue] = useState({username: '', email: '', password: ''});
    const [loginValue, setLoginValue] = useState({username: '', email: '', password: ''});
    const [isLogin, setIsLogin] = useState(false);

    const value ={registerValue,loginValue, setRegisterValue, setLoginValue, isLogin, setIsLogin}
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;