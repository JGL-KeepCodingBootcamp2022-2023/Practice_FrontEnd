import { loginController } from "./loginController.js"
import { notificationController } from "../notifications/notificationsController.js"

const loginElement = document.querySelector('#logUser')
const notificationElement = document.querySelector('.notifications')
const spinnerElement = document.querySelector('.spinnerHere')

notificationController(notificationElement)
loginController(loginElement, spinnerElement, notificationElement)
