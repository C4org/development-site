import React from "react"
import { Link } from "gatsby"
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
  Container,
} from "react-bootstrap"
import "../styles/navbar.modules.css"

export default function StyledNavbar() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" background-color="#12447D">
      <Navbar.Brand href="/">
        <img
          src="/img/logo.png"
          class="d-inline-block align-top navbar-logo"
          alt="C4"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="About" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/about/club">Our Club</NavDropdown.Item>
            <NavDropdown.Item href="/about/board">Our Board</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Support" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/support/">About</NavDropdown.Item>
            <NavDropdown.Item href="/support/seminar">
              Golden Seminar
            </NavDropdown.Item>
            <NavDropdown.Item href="/support/cc-awareness-month">
              Childhood Awareness Month
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Fundraising" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/fundraising/">About</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/find">Chapters</Nav.Link>
          <Nav.Link href="/contact">Events</Nav.Link>
          <Nav.Link href="/blog">Contact</Nav.Link>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
