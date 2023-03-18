import { addDetailController } from './addDetailController.js'
import { notificationController } from '../notifications/notificationsController.js'
import { userActionsController } from '../userActions/userActionController.js';
import { buildSpinnerView} from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

const userActionsElement = document.querySelector('.userActions')
const spinnerElement = document.querySelector('.spinnerHere')
const notificationsElement = document.querySelector('.notifications');

//Reading queryparam from url
const params = new URLSearchParams(window.location.search);
const addId = params.get('addId');   

if (!addId) {                       //Validation that addId exists  
    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
    notificationsElement.classList.add('badNotifications')
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, "Ad doesn't exist");
    setTimeout(() => window.location = '/', 3500) 

}else {
    const addDetailElement = document.querySelector('.addDetail');
    addDetailController(addDetailElement, addId, spinnerElement, notificationsElement, userActionsElement)
}

notificationController(notificationsElement);
userActionsController(userActionsElement, spinnerElement, userActionsElement);
