// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
// import { initializeMQTT } from '../store/mqttlib';

type RootType = {
  store: {},
  history: {}
};

// const mqttConfig = {
//   host: 'ws://192.168.0.21',
//   port: '8083',
//   clientId: 'Tescht',
//   protocolVersion: 3,
//   connectTimeout: 3000,
// };

// const actionTopicMapping = {
//   'CARTESIAN': 'cartesian',
// };
// initializeMQTT(mqttConfig, actionTopicMapping);

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <Router key={Math.random()} history={history} routes={routes} />
    </Provider>
  );
}
