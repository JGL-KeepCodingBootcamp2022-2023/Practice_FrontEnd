import { pubSub } from '../pubSub.js';
import { userActionsController } from '../userActions/userActionController.js';
import { createAddController } from './createAddController.js'
import { notificationController } from '../notifications/notificationsController.js'
import { buildSpinnerView } from '../utils/SpinnerView.js';


const token = localStorage.getItem('token')
const userActionsElement = document.querySelector('.userActions')
const spinnerElement = document.querySelector('.spinnerHere')
const notificationsElement = document.querySelector('.notifications');

notificationController(notificationsElement);
userActionsController(userActionsElement);

if(!token) {                    //Refuse acces to createAdd webpage without login
    
    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
    notificationsElement.classList.add('badNotifications')
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'You need to be logged if you want to create an ad')
    setTimeout(() => window.location = '/' , 3500)
    
} else {
    const createAddFormElement = document.querySelector('#createAddForm');
    createAddController(createAddFormElement, spinnerElement, notificationsElement, userActionsElement)
};



