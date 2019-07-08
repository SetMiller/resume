import React from 'react';
import './App.css';

// React-router-dom
import { BrowserRouter } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import * as actions from './store/actions/index'

import Blogen from './Components/Blogen/Blogen'


class App extends React.Component {

  componentWillMount () {
    this.props.onTryAutoSignup()
  }

  render () {
    return (
      <BrowserRouter>
        <Blogen/> 
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default connect(null, mapDispatchToProps)(App);
