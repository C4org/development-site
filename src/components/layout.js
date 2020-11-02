import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, FormControl, Button, Form, Container} from 'react-bootstrap'
import StyledNavbar from "../components/styledNavbar"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
  return (
      <Container>
      <StyledNavbar></StyledNavbar>
        {children}
        </Container>

  )
}
