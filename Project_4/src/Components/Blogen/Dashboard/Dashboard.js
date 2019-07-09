import React from 'react'
import BadgeText from '../../UI/BadgeText/BadgeText'

// Bootstrap
import { Alert, Container, Col, Row, Badge } from 'react-bootstrap'

// // Font-awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Redux
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

const Dashboard = ( props ) => {

  const badge = props.badgeTextReducer.map((v, i) => (
    <BadgeText key={i} name={v}/>
  ))

  return (
    <section className="Dashboard">
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs lg={10}>
            <Alert variant="success" style={{marginTop: '1rem'}}>
              <Alert.Heading> Что использовано при разработке этого приложения:</Alert.Heading>
              <hr />
              <Row>
                <Col md={6}>
                  {badge}
                </Col>
                <Col md={6}>
                  <Alert variant="danger">
                    <Alert.Heading> Исходный код</Alert.Heading>
                    <p>
                      <br/>
                      <Alert.Link href="https://github.com/SetMiller/resume/tree/master/Project_4">
                        <Badge variant="secondary"> github <br/></Badge>
                      </Alert.Link>
                    </p>
                  </Alert>
                </Col>
              </Row>
            </Alert>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col lg={10}>
            <Alert variant="primary" style={{marginTop: '1rem'}}>
              <Alert.Heading>Что в настоящее время реализовано:</Alert.Heading>
              <hr />
              <p>
                <Badge variant="secondary">1.<br/></Badge> Авторизация: <br/>
                <Badge variant="secondary">1.1<br/></Badge> Валидация вводимой информации <br/>
                <Badge variant="secondary">1.2<br/></Badge> Авторизация новых и зарегистрированных пользователей <br/>
                <Badge variant="secondary">1.3<br/></Badge> Получение и хранение в localStorage данных авторизованного пользователя <br/>
                <Badge variant="secondary">1.4<br/></Badge> Переадресация на стартовую страницу после авторизации <br/>
                <Badge variant="secondary">1.5<br/></Badge> Отсутсвие доступа без авторизации <br/>
                <Badge variant="secondary">1.6<br/></Badge> Срок хранения авторизационных данных пользователя ~ 4мин <br/>
                <Badge variant="secondary">1.7<br/></Badge> Возможность logout, что сбрасывает авторизацию <br/>
                <Badge variant="secondary">1.7<br/></Badge> Спиннер при ожидании ответа от сервера <br/>
                {/* <hr /> */}
                <Badge variant="secondary">2.<br/></Badge> Карточки: <br/>
                <Badge variant="secondary">2.1<br/></Badge> Спиннер при ожидании ответа от сервера <br/>
                <Badge variant="secondary">2.2<br/></Badge> Получение данных с сервера при открытии страницы <br/>
                <Badge variant="secondary">2.3<br/></Badge> Отправка через модальное окно данных на сервер <br/>
                <Badge variant="secondary">2.4<br/></Badge> Обновление информации при отправке формы <br/>
              </p>
              {/* <hr /> */}
            </Alert>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => {
   return {
      badgeTextReducer: state.badgeText.text,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowModalHandler: ( ) => dispatch(actions.showModalHandler()), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
