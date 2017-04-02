import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';


import * as counterActions from '../actions/counter';
import type { counterStateType } from '../reducers/counter';

// import { createClient } from '../reducers/mqttredux';

import { createClient } from '../middlewares/mqtt';

const mqttConfig = {
  url: 'mqtt://localhost:1883/',
  opt: {
    clientId: 'reweather-redux-' + Date.now(),
    connectTimeout: 300,
  },
};
const actionTopicMapping = {
  NEW_WEATHER_DATA: 'reweather/weather',
};

const mqttClient = createClient(mqttConfig);
const actionCreators = {
  ...counterActions,
  push,
};

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://extension.remotedev.io/docs/API/Arguments.html
    actionCreators,
  }) :
  compose;






/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(
  applyMiddleware(mqttClient.createMiddleware(), thunk, router, logger)
);

// const actionTopicMapping = {
//   CARTESIAN: 'cartesian',
// };




export default function configureStore(initialState?: counterStateType) {
  const store = createStore(rootReducer, initialState, enhancer);
  // mqttRed.connect(actionTopicMapping, store);
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }


  mqttClient.connect(actionTopicMapping, store);

  return store;
}
