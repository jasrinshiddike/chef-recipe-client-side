import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



const NavigationBar = () => {

    const {user, logOut, auth} = useContext(AuthContext)


    const location = useLocation();

    const from = location.state?.from?.pathname || '/chef'

    const navigate = useNavigate();

    
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {console.log(error)})
        navigate(from, { replace: true })
    }



    return (
        <Container className='mt-4'>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand><h2 className='fst-italic ms-4 fw-bold font-family-sans-serif'>Foodie_Hub</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <NavLink exact to="/chef" className="fw-bold text-center mx-4 text-decoration-none" activeClassName="active">
                                Home
                            </NavLink>
                            <NavLink to="/blog" className="fw-bold text-center mx-4 text-decoration-none" activeClassName="active">
                                Blog
                            </NavLink>
                        </Nav>
                        <Nav>
                            {user && 
                                <p title={auth?.currentUser?.displayName} className='text-decoration-none'><FaUser style={{fontSize: '2rem', color: 'black', marginRight: '5px'}}/>
                            
                                </p>
                        
                            }
                            <div>
                                {
                                    user ?
                                
                                    <Button onClick={handleLogOut} className='me-4' variant="danger">Logout</Button> :
                                    <Link to="/login">
                                        <Button className='me-4' variant="danger">Login</Button>
                                    </Link> 
                                
                                }
                            </div>   
                      
                        </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;