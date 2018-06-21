import { fromJS } from 'immutable';

import {
    REFRESH_ALL_USER_DECKS, RESET_DECKS
} from './constants';

const decks = []; 

const initialState = fromJS(decks); 

function decksReducer(state = initialState, action) {
    switch(action.type) {
        case REFRESH_ALL_USER_DECKS:
            return fromJS(action.data.decks); 
        case RESET_DECKS: 
            return initialState; 
        default:
            return state; 
    }
}

export default decksReducer;