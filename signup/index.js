import { signupController } from './signupController.js';
import { notificationController } from '../notifications/notificationsController.js'
import { userActionsController } from '../userActions/userActionController.js'

const signupElement = document.querySelector('#createUser')
const notificationsElement = document.querySelector('.notifications')
const spinnerElement = document.querySelector('.spinnerHere')
const closeSessionBeforeElement = document.querySelector('.infoContainer')
const closeSessionButton = document.querySelector('#closeSession')
const userActionsElement = document.querySelector('.userActions')

const token = localStorage.getItem('token')
if(!token){
    closeSessionButton.remove()
}

notificationController(notificationsElement)
signupController(signupElement, spinnerElement, closeSessionBeforeElement, notificationsElement)
userActionsController(userActionsElement, spinnerElement);

