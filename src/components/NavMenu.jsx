import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function NavMenu (props) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`)
  const [open, setopen] = useState(props)
  const [openCN, setOpenCN] = useState(false)
  return (
    <Container fluid className='px-0'>
      <Navbar Container='fluid' collapseOnSelect expand='lg' bg='danger' variant='dark'>
        <Container fluid>
          <Navbar.Brand href='#home'>INVENTARY</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>Products</Nav.Link>
              <Nav.Link onClick={props.accionCP}>Create Products</Nav.Link>
              <NavDropdown title='Notas' id='collasible-nav-dropdown'>
                <li className='dropdown-item' onClick={props.accionCN}>Create Note</li>
                <li className='dropdown-item' onClick={props.accionTN}>Table Notes</li>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>Register</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Sesion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}
