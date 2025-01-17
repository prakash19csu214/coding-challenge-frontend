import { baseUrl } from '../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

export const addForm = (form) => ({
    type: ActionTypes.ADD_FORM,
    payload: form
});

export const addForms = (forms) => ({
    type: ActionTypes.ADD_FORMS,
    payload: forms
});


export const postForm = (firstname, lastname, telnum, email, agree, contactType, message )=> (dispatch)=> {

    const newForm = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message
    }

    return fetch( baseUrl + 'users', {
        method: 'POST',
        body: JSON.stringify(newForm),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {

        if (response.ok) {
                return response;
        }
        else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
        }
    },
        ////if no response from server 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then( response => response.json() )
    .then( response => dispatch(addForms(response)) )
    .catch(error => {
        console.log('Post form', error.message); 
        alert('Form could not be posted\nError'+ error.message);
    });
}