import axios from 'axios';
import api from '../utils/api';
import { GET_ALL_JOBS, JOBS_ERROR } from './types';

export const getAllJobs=() => async(dispatch)=>{
    try {
        const res = await api.get('/jobs/getAllJobs');
        //const res = await axios.get('/jobs/getalljobs');
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