import api from '../utils/api';
import{ message } from 'antd';
import { GET_ALL_JOBS, JOBS_ERROR } from './types';



export const getAllJobs=() => async(dispatch)=>{
    try {
        const res = await api.get('/jobs/getAllJobs');
        dispatch({
            type: GET_ALL_JOBS,
            payload: res.data
        });
    } catch (err) {
        //types: JOBS_ERROR,
       // payload: { msg: err.response.statusText, status: err.response.status }
       console.log(err);     
    }

}

export const applyToJob=(id) => async(dispatch)=>{
    dispatch({ type: 'LOADING', payload: true});
    try {
        const res = await api.post(`/jobs/${id}/apply`);
        console.log(res);
    } catch (err) {
        
       console.log(err);     
    }

}


export const postjob=(values) => async (dispatch) =>{

    //values.postedBy = JSON.parse(localStorage.getItem('user'))._id;
    //console.log("!!@!@ " + localStorage.getItem('profile'));
    dispatch({type: 'LOADING', payload: true})
    try {
       const res = await api.post('/jobs/postjob', values);
     
       message.success('Job posted successfully');

        setTimeout(() => {
            window.location.href='/jobs';
        }, 1000);
    } catch (err) {
        //types: JOBS_ERROR,
       // payload: { msg: err.response.statusText, status: err.response.status }
       console.log(err);     
    }

}




