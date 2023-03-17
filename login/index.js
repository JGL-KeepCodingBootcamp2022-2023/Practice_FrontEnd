import { loginController } from "./loginController.js"
import { notificationController } from "../notifications/notificationsController.js"
import { userActionsController } from '../userActions/userActionController.js'

const loginElement = document.querySelector('#logUser')
const notificationElement = document.querySelector('.notifications')
const spinnerElement = document.querySelector('.spinnerHere')
const userActionsElement = document.querySelector('.userActions')

notificationController(notificationElement)
loginController(loginElement, spinnerElement, notificationElement, userActionsElement)
userActionsController(userActionsElement, spinnerElement);   
