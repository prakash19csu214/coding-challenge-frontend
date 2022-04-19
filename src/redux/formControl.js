import * as ActionTypes from './ActionTypes';


export const Form = (state = {
    form: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FORMS:
            return{...state, form: action.payload}        

        case ActionTypes.ADD_FORM:
        var comment = action.payload;
        return {...state, form: state.form.concat(comment)};
    
    default:
    return state;
    }
} 