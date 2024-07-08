import './header.css'
import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LuUserCircle2, LuHeart, LuShoppingBag, LuSearch } from "react-icons/lu";

export default function Header() {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
        <header>
            <div className="banner">Ottieni il tuo primo corso con uno sconto del 50%. L'offerta è valida solo per i primi 50 studenti. <a href="#">Registrati adesso</a></div>
            <Navbar expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src="/img/logo.png" alt="code circus logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleShow} />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-none">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
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