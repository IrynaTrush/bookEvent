import {api} from '../../api/api';
import fbObjectToArray from '../../services/transfService';

import { GET_PRODUCTS_REQUEST, 
    ADD_EVENT_SUCCESS, ADD_EVENT_FAILED,
    LOAD_EVENTS_SUCCESS, LOAD_EVENTS_FAILED,
    } from '../actionTypes';

export const postNewEventData = (data, history) => (dispatch) => {
    api.postNewEvent(data).then((data) => {
        dispatch({
            type: ADD_EVENT_SUCCESS,
            payload: data,
        });
        history.push('/bookEvent/bucket');
    }).catch((err) => {
        dispatch({
            type: ADD_EVENT_FAILED,
            payload: err,
        });
    });
};

export const getEventsData = () => async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    }); 
    try {
      const fbData = await api.getEvents();
      const events = fbObjectToArray(fbData.data);
      console.log(events)
        dispatch({
          type: LOAD_EVENTS_SUCCESS,
          payload: events,
        });
    } catch (err) {
      dispatch({
        type: LOAD_EVENTS_FAILED,
        payload: err,
        error: true,
      });
    }
  };