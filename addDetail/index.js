import { addDetailController } from './addDetailController.js'
import { notificationController } from '../notifications/notificationsController.js'
import { userActionsController } from '../userActions/userActionController.js';

const userActionsElement = document.querySelector('.userActions')
const spinnerElement = document.querySelector('.spinnerHere')
const notificationsElement = document.querySelector('.notifications');

//Reading queryparam from url
const params = new URLSearchParams(window.location.search);
const addId = params.get('addId');   

if (!addId) {                       //Validation that addId exists  
    //TODO BAD NOTIFICATION
    alert('Anuncio no existe')
    window.location = '/'
}else {
    const addDetailElement = document.querySelector('.addDetail');
    addDetailController(addDetailElement, addId, spinnerElement, notificationsElement, userActionsElement)
}

notificationController(notificationsElement);
userActionsController(userActionsElement);
