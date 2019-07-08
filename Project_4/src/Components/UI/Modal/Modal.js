import React from 'react'


// Redux
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

// Bootstrap
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'

const ModalCard = ( props ) => {

  const cardConfig = () => {
    const cardData = {}
    for (let key in props.modalReducer) {
      cardData[key] = props.modalReducer[key]
    }
    props.onPostServerRequestHandler( cardData, props.token )
    props.onHideModalHandler()
  }

  return (
    <Modal show={props.showReducer} onHide={props.onHideModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Just do it =)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Card Title"
            aria-label="Card Title"
            aria-describedby="basic-addon1"
            data-id="title"
            onChange={props.onInputCardHandler}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Card Subtitle"
            aria-label="Card Subtitle"
            aria-describedby="basic-addon1"
            data-id="subtitle"
            onChange={props.onInputCardHandler}
          />
        </InputGroup>
        <InputGroup>
          <FormControl 
            as="textarea" 
            aria-label="With textarea" 
            placeholder="Card Text"  
            data-id="text"
            onChange={props.onInputCardHandler}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHideModalHandler}>
          Close
        </Button>
        <Button variant="primary" onClick={cardConfig}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapStateToProps = state => {
   return {
      showReducer: state.blogen.show,
      modalReducer: state.modal.modalForm,
      token: state.isAuth.token,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onHideModalHandler: ( ) => dispatch(actions.hideModalHandler( )), 
    onInputCardHandler: ( event ) => dispatch(actions.inputCardHandler( event )),
    onPostServerRequestHandler: ( cardData, token ) => dispatch(actions.postServerRequestHandler( cardData, token )),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard)
