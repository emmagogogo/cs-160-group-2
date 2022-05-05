import api from '../utils/api';
import{ message } from 'antd';
import { GET_ALL_JOBS } from './types';



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

export const editJob=(job, values) => async (dispatch) =>{
 
  
    dispatch({type: 'LOADING', payload: true})
    try {
       await api.post(`/jobs/editjob/${job}`, values);
    
       message.success('Job updated successfully');
  
        setTimeout(() => {
            window.location.href='/jobs';
        }, 2000);
    } catch (err) {
        //types: JOBS_ERROR,
       // payload: { msg: err.response.statusText, status: err.response.status }
       console.log(err);   
       dispatch({type: 'LOADING', payload: false})
    }
 }
 
 export const deleteJob = (id) => async ( dispatch)=>{
    dispatch({ type: 'LOADING', payload: true});
    try {
        const res = await api.delete(`/jobs/${id}`);
        message.success('Job was deleted successfully');
    } catch (err) {
        
       console.log(err);     
    }

}

