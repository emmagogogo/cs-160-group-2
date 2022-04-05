//03/27
import { GET_ALL_JOBS, JOBS_ERROR } from '../actions/types';
const initialState = {
    jobs: []
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
        default: return state;
    }

}
export default jobReducer;

