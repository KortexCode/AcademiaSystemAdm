import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../../../context/useAuthenticated';

interface RouteProtected {
    children : ReactNode;
}

export function RouteProtected({children}: RouteProtected) {
  const navigate = useNavigate();
  const {userLogin} = useAuthenticated();
  const localUserName = localStorage.getItem('username');
  
 useEffect(() => {
  if(!userLogin?.userName && !localUserName) {
    console.log("navega", userLogin?.userName)
    navigate('/');
  }
 });


  return (
    <>
      {children}
    </>
  )
}
