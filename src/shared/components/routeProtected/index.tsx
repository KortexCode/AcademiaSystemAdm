import React, { ReactNode, useEffect } from 'react'
import { useAuthenticated } from '../../../context/useAuthenticated';
import { useNavigate } from 'react-router-dom';

interface RouteProtected {
    children : ReactNode;
}

export function RouteProtected({children}: RouteProtected) {
  const navigate = useNavigate();
  const {userLogin} = useAuthenticated();

 useEffect(() => {
  if(!userLogin) {
    console.log("navega", userLogin)
    navigate('/');
  }
 });


  return (
    <>
      {children}
    </>
  )
}
