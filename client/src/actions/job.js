import api from '../utils/api';
import{ message } from 'antd';
import { GET_ALL_JOBS, JOBS_ERROR, SEARCHED_JOBS } from './types';
import { GET_ALL_JOBS, GET_MY_APPLIED_JOBS } from './types';
import moment from 'moment';



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

export const getMyAppliedJobs=() => async(dispatch)=>{
    try {
        const res = await api.get('/jobs/getMyApplications');
        let newData = res.data.map(jobApplication => {
            if(jobApplication.job[0] == null) return null
            return {
                title:jobApplication.job[0].title, 
                company: jobApplication.job[0].company , 
                appliedDate: moment(jobApplication.date).format('MMM-DD-yyyy'), 
                status: jobApplication.stage,
                id: jobApplication.job[0]._id
            }
        })
        dispatch({
            type: GET_MY_APPLIED_JOBS,
            payload: newData
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

<<<<<<< HEAD
export const searchForJobs=(values) => async (dispatch) => {
    dispatch({type: 'LOADING', payload: true}) 
    try {
        const res = await api.get('/jobs/search?searchQuery=java', values);
        dispatch({
            type: SEARCHED_JOBS,
            payload: res.data
        });
        return res.data
    } catch (err) {
        console.log(err);     
     }
}
=======
export const editJob=(job, values) => async (dispatch) =>{
 
  
    dispatch({type: 'LOADING', payload: true})
    try {
       await api.post(`/jobs/editjob/${job}`, values);
    
       message.success('Job updated successfully');
  
        setTimeout(() => {
            window.location.href='/jobs';
        }, 3000);
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
        console.log(res);
        message.success('Job was deleted successfully');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
    } catch (err) {
        
       console.log(err);     
    }

}

>>>>>>> 4ddc162582813caa1645c17c4173375d63342cb2
