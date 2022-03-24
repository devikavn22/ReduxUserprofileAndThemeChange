import React from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from '../features/user'

function Login(){
    const dispatch=useDispatch();
    return (
        <div>
            <button onClick={()=>{dispatch(login({
                name:'Arya',age:30,email:'arya@gmail.com'
            }))}}>LOGIN</button>
            <button onClick={()=>{dispatch(logout())}}>Logout</button> {/* Logout action will NOT take any payload*/}
        </div>
    );
}
export default Login