import {
  SET_PLAYER_ID
} from '../actions/types';

export default function (state = 'tescht', action) {
  switch (action.type) {
    case SET_PLAYER_ID:
      return action.users;
    default:
      return state;
  }
}
