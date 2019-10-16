import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addAction, reduceAction} from './redux/count'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <CountNormalRedux />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  addAction,
  reduceAction
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
