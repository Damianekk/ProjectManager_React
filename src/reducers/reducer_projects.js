import _ from 'lodash';
import { FETCH_PROJECTS, FETCH_PROJECT, DELETE_PROJECT } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_PROJECTS:
            return _.mapKeys(action.payload.data,'projectId')
        case FETCH_PROJECT:
            // const post = action.payload.data;
            // const newState = { ...state }
            // newState[projectId] = project;
            // return newState; 
            return { ...state, [action.payload.data.projectId]: action.payload.data}
            // w powyższej linijce za pomocą ...state wyciągamy cały stan aplikacji 
            // następnie wyciągamy id projektu który "otwieramy", jeśli istnieje taki 
            // klucz to nadpisuje go nowym obiektem jeśli nie to insertuje klucz / wartość
        case DELETE_PROJECT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}