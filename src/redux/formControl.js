

export const Form = (state = {
    form: []
}, action) => {
    return{...state, form: action.payload}
} 