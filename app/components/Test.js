// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/testactions';

class Test extends Component {
  props: {
    message: string,

  };



  render() {
    console.log(`RENDERERER =========> ${this.props}`);
    console.log(this.props);
    console.log(this.props.sendMessage);
    // const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;

    // const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <button onClick={() => this.props.sendMessage('b_record', 'True', { qos: 1 })}>SEND</button>
        {this.props.message}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
     message: state.mqttreducer.snackbar.message,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

export default connect(mapStateToProps, actions)(Test);


