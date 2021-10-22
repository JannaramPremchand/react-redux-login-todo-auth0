import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav , Button } from 'react-bootstrap'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
     <Nav justify variant="tabs" className="justify-content-end" >
  <Nav.Item>
  <Button onClick={() => logout()}>
        Log Out
      </Button>
  
  </Nav.Item>
  
</Nav>


      </>
    )
  )
}

export default LogoutButton
