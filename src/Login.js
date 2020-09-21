import React from 'react'
import { Button } from '@material-ui/core'
import "./Login.css"
import { auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer'

function Login() {
    const[{},dispatch]=useStateValue();

    
    const signIn=()=>{
        auth.signInWithPopup(provider)
            .then((result)=>  {
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                }); 
            })    //Just these simple lines + Provider from firebase to enable signin
            .catch((error)=> alert(error.message))
            
    }
    return (
        <div className="login">
           <div className="login_container">
                <img src="https://www.iconfinder.com/data/icons/brands-applications/512/Whatsapp-512.png" alt="" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp 😄</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                   SIGN IN WITH GOOGLE
                </Button>
           </div>
        </div>
    )
}

export default Login
