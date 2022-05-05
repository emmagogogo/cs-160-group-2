import { GET_CONVERSATIONS } from '../actions/types';
const initialState = {
    conversations: []
}

function conversationReducer(state= initialState, action){


    switch(action.type)
    {
        case GET_CONVERSATIONS : 
            return{
                ...state,
                conversations: action.payload
            }
        default: return state;
    }

}
export default conversationReducer;

