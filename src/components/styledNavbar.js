import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
          className="d-inline-block align-top navbar-logo"
          alt="C4"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="About" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <AniLink cover direction="right" to="/about" bg="#12447D">
                About
              </AniLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AniLink cover direction="right" to="/about/board" bg="#12447D">
                Our Board
              </AniLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Support" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <AniLink cover direction="right" to="/support" bg="#12447D">
                About
              </AniLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AniLink
                cover
                direction="right"
                to="/support/seminar"
                bg="#12447D"
              >
                Golden Seminar
              </AniLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AniLink
                cover
                direction="right"
                to="/support/cc-awareness-month"
                bg="#12447D"
              >
                Childhood Cancer Awareness Month
              </AniLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Fundraising" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <AniLink cover direction="right" to="/fundraising" bg="#12447D">
                About
              </AniLink>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link>
            <AniLink cover direction="right" to="/find" bg="#12447D">
              Chapters
            </AniLink>
          </Nav.Link>
          <Nav.Link>
            <AniLink cover direction="right" to="/events" bg="#12447D">
              Events
            </AniLink>
          </Nav.Link>
          <Nav.Link>
            <AniLink cover direction="right" to="/contact" bg="#12447D">
              Contact
            </AniLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
