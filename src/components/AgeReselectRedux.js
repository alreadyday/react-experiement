import React from 'react';
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import {addAction, reduceAction} from '../redux/age'

class AgeReselectRedux extends React.PureComponent {
  renderCount = 1;

  render(){
    return <div>
      age reselect: {this.props.age.print}, render count: {this.renderCount++}
      <button onClick={()=>this.props.reduceAction()}>reduce count</button>
      <button onClick={()=>this.props.addAction()}>add count</button>
    </div>
  }
}


const ageSelector = state => state.age
const reselect = createSelector(
  ageSelector,
  age => ({age: {
    print : age
  }})
)

const mapDispatchToProps = {
  addAction,
  reduceAction
}
export default connect(reselect, mapDispatchToProps)(AgeReselectRedux);
