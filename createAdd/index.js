import { createAddController } from './createAddController.js'

const token = localStorage.getItem('token')

if(!token) {                    //Refuse acces to createAdd webpage without login
    window.location = '/';
} else {
    const createAddFormElement = document.querySelector('#createAddForm');
    createAddController(createAddFormElement)
}
