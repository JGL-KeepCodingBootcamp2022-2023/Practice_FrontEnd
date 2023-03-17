import { loginController } from "./loginController.js"
import { notificationController } from "../notifications/notificationsController.js"
import { userActionsController } from '../userActions/userActionController.js'


const loginElement = document.querySelector('#logUser')
const notificationElement = document.querySelector('.notifications')
const spinnerElement = document.querySelector('.spinnerHere')
const userActionsElement = document.querySelector('.userActions')
const closeSessionBeforeElement = document.querySelector('.leftSide')

notificationController(notificationElement)
loginController(loginElement, spinnerElement, notificationElement, closeSessionBeforeElement)
userActionsController(userActionsElement, spinnerElement);
