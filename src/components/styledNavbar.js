import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import "../styles/navbar.modules.css"

export default function StyledNavbar() {
  return (
    <Navbar expand="md" fixed="top" variant="dark" background-color="#12447D">
      <Navbar.Brand href="/">
        <img
          src="img/logo.png"
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

          <AniLink cover direction="right" to="/find" bg="#12447D" className="nav-link">
            Chapters
          </AniLink>
          <AniLink cover direction="right" to="/events" bg="#12447D" className="nav-link">
            Events
          </AniLink>
          <AniLink cover direction="right" to="/contact" bg="#12447D" className="nav-link">
            Contact
          </AniLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
