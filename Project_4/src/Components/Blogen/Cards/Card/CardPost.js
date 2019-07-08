import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './CardPost.css'


class CardPost extends Component {
  state = {
    show: false,
    upd: true
  }

  shouldComponentUpdate(nextProps, nextState){
    // if(!this.state.upd){
    //   return false
    // } else {
    //   this.setState({upd: false})
      return true
    // }
  }

  componentWillMount(){
    setTimeout(() => {
      this.toShow.bind(this)()
    }, this.props.wait);
  }

  componentWillUnmount(){
    // FIXME:
    // Can't perform a React state update on an unmounted component.
    // Вроде бы проблема решена
    this.setState = (state,callback) => {
      return;
    };
  }

  toShow(){
    this.setState({show: true})
  }

  render() {
    return (
      <Card 
        className={this.state.show ? "CardPost" : "CardPostHide"}
        style={{ width: '18rem', margin: '0.5rem' }}>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>
          <Card.Title>Title: {this.props.title.value}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Subtitle: {this.props.subtitle.value}</Card.Subtitle>
          <Card.Text>
            Text: {this.props.text.value}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default CardPost
