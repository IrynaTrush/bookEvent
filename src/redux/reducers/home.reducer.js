import { LOAD_EVENTS_SUCCESS } from '../actionTypes';

const initialState = {
  events: [],
};

const homeReducer = ( state = initialState, action) => {
    switch(action.type) {
      case LOAD_EVENTS_SUCCESS: {
        console.log(action.payload)
        return {
          ...state,
          events: action.payload
        };
      }
      default:
            return state
    };
};

export default homeReducer;