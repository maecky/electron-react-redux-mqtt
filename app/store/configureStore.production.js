// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { counterStateType } from '../reducers/counter';

import { createClient } from '../middlewares/mqtt';

const mqttConfig = {
  url: 'mqtt://localhost:1883/',
  opt: {
    clientId: 'reweather-redux-' + Date.now(),
    connectTimeout: 3000,
  },
};
const actionTopicMapping = {
  NEW_WEATHER_DATA: 'reweather/weather',
};

const mqttClient = createClient(mqttConfig);

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(mqttClient.createMiddleware(), thunk, router);


export default function configureStore(initialState?: counterStateType) {
  const store = createStore(rootReducer, initialState, enhancer);
  mqttClient.connect(actionTopicMapping, store);

  return store // eslint-disable-line
}
