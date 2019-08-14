import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addAction, reduceAction} from './redux/count'
import logo from './logo.svg';
import './App.css';
import AgeNormalRedux from './components/AgeNormalRedux';
import AgeReselectRedux from './components/AgeReselectRedux';
import CountNormalRedux from './components/CountNormalRedux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <AgeNormalRedux />
          <AgeReselectRedux />
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
