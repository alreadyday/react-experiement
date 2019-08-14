import React from 'react';
import { connect } from 'react-redux'

class AgeNormalRedux extends React.PureComponent {
  renderCount = 1;

  render(){
    return <div>
      age Normal: {this.props.age.print}, render count: {this.renderCount++}
    </div>
  }
}


const mapStateToProps = (state) => {
  return {
    age: {
      print :state.age
    }
  }
};


export default connect(mapStateToProps)(AgeNormalRedux);
