import './header.css'
import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import { LuUserCircle2, LuHeart, LuShoppingBag, LuSearch } from "react-icons/lu";

export default function Header() {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
        <header>
            <div className="banner">Ottieni il tuo primo corso con uno sconto del 50%. L'offerta è valida solo per i primi 50 studenti. <a href="#">Registrati adesso</a></div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#"><img src="/img/logo.png" alt="code circus logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleShow} />

                    <Navbar.Collapse id="basic-navbar-nav" className="d-none">
                        <Nav className="m-auto gap-3 nav_links">
                            <Nav.Link href="#" className='currentPage'>Home</Nav.Link>
                            <NavDropdown title="Corsi" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Eventi</Nav.Link>
                            <Nav.Link href="#">Contatti</Nav.Link>
                            <Nav.Link href="#" className='text-decoration-underline'>Registrati</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='social d-flex gap-3'>
                        <a href="#"><LuUserCircle2 /></a>
                        <a href="#"><LuHeart /></a>
                        <a href="#"><LuShoppingBag /></a>
                        <a href="#"><LuSearch /></a>
                    </div>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={toggleShow} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><img src="/img/logo.png" alt="code circus logo" /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link className='text-dark' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-dark' href="#link">Link</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}