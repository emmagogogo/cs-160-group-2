import api from '../utils/api';
import { GET_MESSAGES, MESSAGE_ERROR } from './types';

// Get posts
export const getMessages = () => async (dispatch) => {
    try {
      const res = await api.get('/messages');
  
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
};

