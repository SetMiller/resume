import React from 'react'
import './Blogen.css'

// Bootstrap
import { Container, Navbar, Nav, NavDropdown, Col, Row } from 'react-bootstrap';

// Font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faUserCircle, faCog, faUserTimes } from "@fortawesome/free-solid-svg-icons";

// Route
import { Route, NavLink, Redirect, Switch } from "react-router-dom"

// Components
import Dashboard from './Dashboard/Dashboard'
import Cards from './Cards/Cards'
import Login from './Login/Login'

// Modal
import ModalCard from '../UI/Modal/Modal'

// Redux
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

const titleIcon = (
  <React.Fragment>
    <FontAwesomeIcon icon={faUser}/> Welcome Brad
  </React.Fragment>
)

// TODO: поправить роуты до конца, чтобы перекидывало правильно при кастомнов вводе

const year = new Date().getFullYear()

const Blogen = ( props ) => {
  // console.log('propsBlogen', props)
  let page = (
    <React.Fragment>
      <Navbar.Brand href="#home">Blogen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/" className="nav-link">Dashboard</NavLink>
          <NavLink to="/cards" className="nav-link">Cards</NavLink>
        </Nav>
        <NavDropdown title={titleIcon} id="basic-nav-dropdown" variant="danger">
          <NavDropdown.Item href="#action/3.1">
            <FontAwesomeIcon icon={faUserCircle}/> Profile
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            <FontAwesomeIcon icon={faCog}/> Settings
          </NavDropdown.Item>
        </NavDropdown>
        <Nav >
          {/* FIXME: тут логаут функция */}
          <NavLink to="/login" className="nav-link" onClick={props.onLogoutHandler}>
            <FontAwesomeIcon icon={faUserTimes}/> Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </React.Fragment>
  )
  let routes = (
    <Switch>
      <Route path="/cards" component={Cards} />
      <Route path="/" exact component={Dashboard} />
      <Redirect to="/"/>
    </Switch>
  )
  if (!props.isAuth) {
    page = <Navbar.Brand href="#home">Blogen</Navbar.Brand>
    routes = (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login"/>
      </Switch>
    )
  }

  return (
    <React.Fragment>
      
      <div className="Blogen">
        <Navbar bg="dark" variant="dark" expand="md">
          <Container py="3">
            {page}
          </Container>
        </Navbar>
        {routes}
        <footer className="footer" id="main-footer">
          <Container>
            <Row className="justify-content-sm-center">
              <Col sm="auto">
                <p>
                  Copyright &copy; {year} Blogen
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
        <ModalCard/>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
   return {
      isAuth: state.isAuth.isAuth,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoutHandler: ( ) => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogen)
