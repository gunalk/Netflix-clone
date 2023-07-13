import React from 'react'
import "./Profile.css"
import { useSelector } from 'react-redux'
import Nav from '../../Components/Nav/Nav'
import { auth } from '../../Firebase'
import { signOut } from 'firebase/auth'
const Profile = () => {
  const user=useSelector(state=>state.user.user)
  const logOut=()=>{
       signOut(auth)
  }
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen-body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen-info '>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
          <div className='profileScreen-details'>
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>
                Plans
                <button onClick={logOut}className='profileScreen-signOut'>SignOut</button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile