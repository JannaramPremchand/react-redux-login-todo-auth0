import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, Button } from 'react-bootstrap';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Nav justify variant="tabs" className="justify-content-end" >
  <Nav.Item>
  <Button variant='success' onClick={() => loginWithRedirect()}>
        Log In
      </Button>
  
  </Nav.Item>
 </Nav>
      

    )
  )
}

export default LoginButton
