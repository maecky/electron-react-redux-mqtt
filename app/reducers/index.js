// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import mqttreducer from './mqttreducer';

// import testred from './test';

const rootReducer = combineReducers({
  mqttreducer,
  counter,
  routing
});

export default rootReducer;
