import React from 'react'
import "./SignIn.css"
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
const SignInScreen = () => {
  const [email,setEmail]=useState("");
  const [password,setPassWord]=useState('')
  const register=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((authuser)=>{
      console.log(authuser)
    }).catch((err)=>{
      alert(err.message)
    })
  }
const SignIn=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth,email,password).then((authuser)=>{
    console.log(authuser)
  }).catch((err)=>{
    alert(err.message)
  })
}

  return (
    <div className='signInScreen'>
      <form>
        <h1>Sign In</h1>
        <input value={email} placeholder='Email'onChange={(e)=>setEmail(e.target.value)} type="email" />
        <input value={password} placeholder='password' onChange={(e)=>setPassWord(e.target.value)}  type="password" />
        <button type="submit" onClick={SignIn}>Sign In</button>
        <h4><span className='signInScreen-gray'>New To Netflix?</span>
        <span  className='signInScreen-Link' onClick={register}> Sign Up Now</span></h4>
      </form>
    </div>
  )
}

export default SignInScreen