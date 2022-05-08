//03/27
import { GET_ALL_JOBS, GET_MY_APPLIED_JOBS } from '../actions/types';
const initialState = {
    jobs: [],
    myAppliedJobs: []
}

function jobReducer(state= initialState, action){
    //const { type, payload } = action;

    switch(action.type)
    {
        case GET_ALL_JOBS : 
            return{
                ...state,
                jobs: action.payload
            }
        case GET_MY_APPLIED_JOBS:
            return {
                ...state,
                myAppliedJobs: action.payload
            }
        default: return state;
    }

}
export default jobReducer;

