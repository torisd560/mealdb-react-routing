import React from 'react';
import { Container, Form, Nav, Navbar} from 'react-bootstrap';
import img from './mealdb.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <Navbar className='mb-5 py-3' collapseOnSelect expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={img} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav bg-white" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-5">
                            <Link  to ='/home' className='selected'>Home</Link>
                            <Link  to ='/resturant' className='selected'>Resturant</Link>
                            <Link  to ='/category' className='selected'>Category</Link>
                            <Link  to ='/resturant/idMeal' className='selected'>Details</Link>
                        </Nav>
                        <Form.Control className='w-50' type="text" placeholder="Search Your Food...." />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;