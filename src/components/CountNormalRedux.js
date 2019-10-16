import React from 'react';
import {addAction, reduceAction} from '../redux/count'
import { connect } from 'react-redux'

class CountNormalRedux extends React.PureComponent {
  render(){
    return <div>
      count: {this.props.count}, render count: {this.renderCount++}
      <button onClick={()=>this.props.reduceAction()}>reduce count</button>
      <button onClick={()=>this.props.addAction()}>add count</button>
    </div>
  }
}

export default CountNormalRedux;
