import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import "./App.css"
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { login, logout } from './store/slice'
const App = () => {
  const user=useSelector(state=>state.user.user)
  const dispatch=useDispatch()
  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
    if(userAuth){
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email
      }))
    }
    else{
      dispatch(logout())
    }

    return unsubscribe

   })
  },[])
  return (
    <div className='app'>
   <BrowserRouter>
   {
    
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
   }
   </BrowserRouter>
    </div>
  )
}

export default App
