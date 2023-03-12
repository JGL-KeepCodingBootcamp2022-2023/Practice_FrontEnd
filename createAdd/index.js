import { userActionsController } from '../userActions/userActionController.js';
import { createAddController } from './createAddController.js'

const token = localStorage.getItem('token')
const userActionsElement = document.querySelector('.userActions')

if(!token) {                    //Refuse acces to createAdd webpage without login
    window.location = '/';
} else {
    const createAddFormElement = document.querySelector('#createAddForm');
    createAddController(createAddFormElement)
};

userActionsController(userActionsElement);


