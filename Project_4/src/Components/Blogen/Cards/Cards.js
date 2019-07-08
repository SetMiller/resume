import React from 'react'
import CardPost from './Card/CardPost'
import Spinner from '../../UI/Spinner/Spinner'
import { withRouter } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

// Bootstrap
import { Container, Col, Row, Alert, Button } from 'react-bootstrap'

// Font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Cards extends React.Component {

  componentDidMount(){
    this.props.onFetchCardsHandler( this.props.token )
  }

  // Обновляем карточки, тк поменялся loading статус из-за отправки формы
  componentWillUpdate(nextProps, nextState){
    if (this.props.modalReducer.loading) {
      this.props.onFetchCardsHandler( this.props.token )
    }
  }

  render () {
    let cardsToRender = this.props.cardsReducer.cards.map((card, i) => (
      <CardPost 
      key={card.id}
      {...card.config}
      wait={300 * (i + 1)}/>
    ))

    if (this.props.cardsReducer.loading) {
      cardsToRender = <Spinner/>
    }

    return (
      <section className="Cards">
        {/* {this.props.modalReducer.loading ? <Redirect to="/cards"/> : null} */}
        <Container>
          <Row>
            <Col md={8}>
              <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message. This example
                  text is going to run a bit longer so that you can see how spacing within an
                  alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                  Авторизационный токен
                  
                </p>
              </Alert>
            </Col>
            <Col md={4}>
              <Alert variant="primary" style={{margin: '1rem'}}>
                <Alert.Heading>Add Cards</Alert.Heading>
                <p>
                  Здесь можно добавить новую карточку
                </p>
                <hr />
                <Button variant="primary" size="lg" block onClick={this.props.onShowModalHandler}>
                  <FontAwesomeIcon icon={faPlus}/> Add new card
                </Button>
              </Alert>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {cardsToRender} 
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
   return {
      cardsReducer: state.cards,
      modalReducer: state.modal,
      token: state.isAuth.token,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchCardsHandler: ( token ) => dispatch(actions.fetchCardsHandler( token )),
    onShowModalHandler: ( ) => dispatch(actions.showModalHandler()),
    onCardsUpdateStopHandler: ( ) => dispatch(actions.cardsUpdateStopHandler()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter( Cards ))
