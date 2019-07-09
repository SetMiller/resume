import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './CardPost.css'


class CardPost extends Component {
  state = {
    show: false,
  }

  componentWillMount(){
    setTimeout(() => {
      this.toShow.bind(this)()
    }, this.props.wait);
  }

  toShow(){
    this.setState({show: true})
  }

  render() {
    return (
      <Card 
        className={this.state.show ? "CardPost" : "CardPostHide"}
        style={{ width: '16rem', margin: '0.5rem' }}>
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
