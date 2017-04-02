const defaultState = {
  location: {
    city: 'Bandung',
    region: 'West Java',
    country: 'Indonesia',
  },

  wind: 6,
  temperature: [],

  snackbar: {
    state: false,
    message: '',
  },
};

type actionType = {
  type: string
};


export default function bla(state = defaultState, action: actionType) {
  // export default (state = defaultState, action) => {
  console.log("reducer mqtt");
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'NEW_WEATHER_DATA':
      // const payload = JSON.parse(action.payload);
      const payload = action.payload.toString();
      let temperature;

      // if (state.temperature.length > 29)
      //   temperature = state.temperature.slice(1)
      // else
      //   temperature = state.temperature.concat([{
      //     time: new Date(),
      //     value: Number(payload.temperature),
      //   }]);

      // return {
      //   ...state,
      //   temperature,
      //   location: payload.location,
      //   wind: Number(payload.wind),
      // };
      return {
        ...state,
        snackbar: {
          state: true,
          message: payload,
        }
      };

    case 'MQTT_CONNECT':
      console.log('reducer in connect');

      let blar = {
        ...state, snackbar: {
          state: true,
          message: 'Connected to MQTT broker',
        },
      };
      console.log(blar);
      return blar;

    case 'MQTT_DISCONNECT':
      return {
        ...state,
        snackbar: {
          state: true,
          message: 'Disconnected from MQTT broker',
        },
      };

    case 'MQTT_RECONNECT':
      return {
        ...state,
        snackbar: {
          state: true,
          message: 'Trying to reconnect to MQTT broker',
        },
      };

    case 'MQTT_OFFLINE':
      return {
        ...state,
        snackbar: {
          state: true,
          message: 'Offline from MQTT broker',
        },
      };

    case 'MQTT_ERROR':
      return {
        ...state,
        snackbar: {
          state: true,
          message: action.err.message,
        },
      };

    case 'SNACKBAR_CLOSE':
      return {
        ...state,
        snackbar: {
          state: false,
          message: '',
        },
      };

    default:
      return state;
  }
}
