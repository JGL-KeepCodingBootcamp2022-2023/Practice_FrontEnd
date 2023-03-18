import { adDetailController } from './adDetailController.js'
import { notificationController } from '../notifications/notificationsController.js'
import { userActionsController } from '../userActions/userActionController.js';
import { buildSpinnerView} from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';
import { editAdController } from './editAdController.js'


const userActionsElement = document.querySelector('.userActions')
const spinnerElement = document.querySelector('.spinnerHere')
const notificationsElement = document.querySelector('.notifications');

notificationController(notificationsElement);

//Reading queryparam from url
const params = new URLSearchParams(window.location.search);
const addId = params.get('addId');
const token = localStorage.getItem('token')   

if (!addId) {                       //Validation that addId exists  
    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
    notificationsElement.classList.add('badNotifications')
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, "Ad doesn't exist");
    setTimeout(() => window.location = '/', 3500) 
    
}else if (!token){
    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
    notificationsElement.classList.remove('hide')
    notificationsElement.classList.add('badNotifications')
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, "Sorry, you must be logged.");
    setTimeout(() => window.location = '/', 3500) 
    
}else {
    
    const editAdDetailElement = document.querySelector('.addDetail');
    const editAdFormElement = document.querySelector('.editAdForm')
    editAdController(editAdFormElement, spinnerElement, notificationsElement)
    adDetailController(editAdDetailElement, addId, spinnerElement, notificationsElement, userActionsElement)
    
}

userActionsController(userActionsElement, spinnerElement, userActionsElement);