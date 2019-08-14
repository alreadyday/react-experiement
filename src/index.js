import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import './index.css';

class Index extends React.PureComponent {
  constructor(){
    super();
    this.store = createStore(reducer);
  }
  render(){
    return <Provider store={this.store} >
      <App />
    </Provider>
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
