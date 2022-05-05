import api from '../utils/api';
import { GET_MESSAGES } from './types';

// Get messages
export const getMessages = () => async (dispatch) => {
    try {
      const res = await api.get('/messages/');
  
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    } catch (err) {
      //dispatch({
        //type: MESSAGE_ERROR,
        //payload: { msg: err.response.statusText, status: err.response.status }
      //});
      console.log(err);     
    }
};


// Post messages

export const postMessages=(values) => async (dispatch) =>{

    //console.log("!!@!@ " + localStorage.getItem('profile'));
    dispatch({type: 'LOADING', payload: true})
    try {
       const res = await api.post('/messages/', values);
     
       message.success('Message posted successfully');

        setTimeout(() => {
            window.location.href='/messages';
        }, 1000);
    } catch (err) {
        //types: JOBS_ERROR,
       // payload: { msg: err.response.statusText, status: err.response.status }
       console.log(err);     
    }

}