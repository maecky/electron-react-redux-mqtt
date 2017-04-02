import {
  SET_PLAYER_ID
} from './types';

/* ----------  ACTION CREATORS  ----------*/
export const setPlayerId = (users) => ({
  type: SET_PLAYER_ID,
  users: users
});

export function sendMessage(topic, msg, options = { qos: 2 }) {
  return {
    type: 'MQTT_SEND',
    payload: msg,
    options,
    topic
  };
}
