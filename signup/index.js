import { signupController } from './signupController.js';
import { notificationController } from '../notifications/notificationsController.js'

const signupElement = document.querySelector('#createUser')
const notificationElement = document.querySelector('.notifications')
const spinnerElement = document.querySelector('.spinnerHere')

signupController(signupElement, spinnerElement)

notificationController(notificationElement)

