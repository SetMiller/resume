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
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={7}>
              <Alert variant="success" style={{
                  marginTop: '1rem', 
                  marginBottom: '0rem'
                }}>
                <Alert.Heading>Работа с карточками</Alert.Heading>
                <p>
                  Здесь реализована простая отправка карточки на сервер при условии наличия авторизации пользователя. Так же моментальное отображение изменения при отправке карточки
                </p>
              </Alert>
            </Col>
            <Col md={6} lg={5}>
              <Alert variant="primary" style={{marginTop: '1rem', marginBottom: '0rem'}}>
                <Alert.Heading>Add Cards</Alert.Heading>
                <p>
                  Здесь можно добавить новую карточку
                </p>
                <Button variant="primary" size="lg" block onClick={this.props.onShowModalHandler}>
                  <FontAwesomeIcon icon={faPlus}/> Add new card
                </Button>
              </Alert>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{margin: '0.75rem 0rem'}}>
            {cardsToRender}   
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => {
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
