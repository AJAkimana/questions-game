import { GET_RESULTS } from '../actions/types';

const initialState = {
    result: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_RESULTS:
            return {
                ...state,
                result: action.payload
            }
        default: 
            return state;
    }
}