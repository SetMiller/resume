import React, { useEffect } from 'react'

// Bootstrap
import { Container, Alert, Button, Col, Row, Form} from 'react-bootstrap';

// Redux
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

// Spinner
import Spinner from '../../UI/Spinner/Spinner'


const Login = ( props ) => {

  const redirectToTarget = () => {
    props.onIsAuthOffHandler()
    // FIXME: проверить редирект взависимости от наличия токена
    props.history.push(`/`)
  }
  
  const submitHandler = ( event ) => {
    event.preventDefault()
    const email = props.login.email.value
    const password = props.login.password.value
    const isSignin = props.loginSignin
    props.onAuthHandler(email, password, isSignin)
    // props.history.push(`/`)
  }

  const checkboxHandler = ( e ) => {
    props.onIsSigninHandler( e )
  }

  let loginForm = (
    <Form 
      variant="success" 
      style={{
        margin: '0rem 1rem 1rem 1rem', 
        padding: '.75rem 1.25rem', 
        border: '1px solid #eee', 
        borderRadius: '5px'
      }}
      onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          data-id="email"
          // FIXME: отсюда берем инпуты
          onChange={props.onLoginInput}/>
        <Form.Text className="text-muted">
          {!props.login.email.valid 
            ? 'Укажите правильно адрес электронной почты' 
            : <span style={{color: 'green'}}>Адрес электронной почты валиден</span>}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          data-id="password"
          // FIXME: отсюда берем инпуты
          onChange={props.onLoginInput}/>
        <Form.Text className="text-muted">
          {!props.login.password.valid 
            ? 'Укажите пароль (не менее 6 символов)' 
            : <span style={{color: 'green'}}>Пароль валиден</span>}
        </Form.Text>
      </Form.Group>
      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Уже зарегистрированы?" onClick={checkboxHandler}/>
      </Form.Group>
      <Button variant="success" type="submit">
        Login
      </Button>
      <Form.Text className="text-muted">
        {/* FIXME: тут проверяем ответы от сервера */}
        {props.authError 
          ? <span style={{color: 'red', marginTop: '0.5rem'}}>{props.authError}</span>
          : null}
      </Form.Text>
    </Form>
  )

  if (props.authLoading) {
    loginForm = <Spinner />
  }

  return (
    <section className="Login">
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs sm="10">
            <Alert variant="success" style={{margin: '1rem'}}>
              <Alert.Heading>Добро пожаловать!</Alert.Heading>
              <p>
                Это небольшое SPA приложение, основной функционал в котором строится на взаимодействии с сервером (отправка и получение данных) и возможности простенькой авторизации пользователя.
              </p>
              <hr />
              <p className="mb-0">
                Чтобы зарегистрироваться просто введите любой логин и пароль.
                Если это не первое помещение, используйте можете использовать уже созданные.
              </p>
            </Alert>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col xs sm= "10" md="8" lg="7" xl="6">
            {loginForm}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => {
  // console.log('state.login', state.login)
   return {
      isAuth: state.isAuth.isAuth,
      login: state.login.loginForm,
      loginSignin: state.login.isSignin,
      authError: state.isAuth.error,
      authLoading: state.isAuth.authLoading,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthHandler: ( email, password, isSignin ) => dispatch(actions.auth( email, password, isSignin )),
    onLoginInput: ( e ) => dispatch(actions.inputLoginHandler( e )),
    onIsSigninHandler: ( e ) => dispatch(actions.isSignin( e )),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
