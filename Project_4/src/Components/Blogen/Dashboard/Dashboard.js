import React from 'react'
import BadgeText from '../../UI/BadgeText/BadgeText'

// Bootstrap
import { Alert, Container, Col, Row, Button, Badge } from 'react-bootstrap'

// Font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
        <Row>
          <Col lg={8}>
            <Alert variant="success" style={{margin: '1rem'}}>
              <Alert.Heading> Перечень того, что было использовано при разработке этого приложения</Alert.Heading>
              <hr />
                {badge}
            </Alert>
          </Col>
          <Col lg={4} >
            <Alert variant="primary" style={{margin: '1rem'}}>
              <Alert.Heading>Add Cards</Alert.Heading>
              <p>
                Здесь можно добавить новую карточку
              </p>
              <hr />
              <Button variant="primary" size="lg" block onClick={props.onShowModalHandler}>
                <FontAwesomeIcon icon={faPlus}/> Add new card
              </Button>
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
