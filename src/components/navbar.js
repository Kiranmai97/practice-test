import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './design.css';

function ConditionalRendering() {

    const [state, setState] = useState({
        home: '',
        about: '',
        contact: ''
    })
   

    const show =(value)=>{
        let home = '';
        let about = '';
        let contact = '';
        if(value === 'home'){
            home="home"
        }else if(value === 'about'){
            about="About"
        }else{
            contact="Contact Us"
        }
        setState({...state, home:home, about:about, contact:contact})
    }
    return (
        <div>
            <Navbar bg="white" variant="white">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => show('home')}>Home</Nav.Link>
                        <Nav.Link href="#features" onClick={() => show('about')}>About</Nav.Link>
                        <Nav.Link href="#pricing" onClick={() => show('contact')}>Contact Us</Nav.Link>
                        <h2 className = "h2h3">Home</h2>
                        <h3 className = "h2h3">Class</h3>
                    </Nav>
                </Container>
            </Navbar>
            {
                state.home && <h2>You are in Home Page</h2>
            }
            {
                state.about && <h2>You are in About Page</h2>
            }
            {
                state.contact && <h2>You are in Contact Page</h2>
            }
        </div>
    );
}
export default ConditionalRendering