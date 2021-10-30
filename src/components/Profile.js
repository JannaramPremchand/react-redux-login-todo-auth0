import React from 'react';
import './Style.css';
import { useAuth0 } from "@auth0/auth0-react";
import Todoapp from './Todoapp';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    
    isAuthenticated && ( 
    
      <div>
     <Todoapp person={user.nickname}/>
      </div>
    ) 
  )
}

export default Profile
