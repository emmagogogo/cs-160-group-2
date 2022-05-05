import api from '../utils/api';
import { GET_CONVERSATIONS } from './types';

// Get conversation
export const getConversations = () => async (dispatch) => {
    try {
      const res = await api.get('/conversations/getConversations');
  
      dispatch({
        type: GET_CONVERSATIONS,
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

export const postConversations=(values) => async (dispatch) =>{

    //console.log("!!@!@ " + localStorage.getItem('profile'));
    dispatch({type: 'LOADING', payload: true})
    try {
       const res = await api.post('/conversations/postConversations', values);
     
       message.success('Conversation posted successfully');

        setTimeout(() => {
            window.location.href='/onversations';
        }, 1000);
    } catch (err) {
        //types: JOBS_ERROR,
       // payload: { msg: err.response.statusText, status: err.response.status }
       console.log(err);     
    }

}