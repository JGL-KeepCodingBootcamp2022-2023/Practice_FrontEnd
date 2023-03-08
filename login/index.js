import { loginController } from "./loginController.js"
import { notificationController } from "../notifications/notificationsController.js"

const loginElement = document.querySelector('#logUser')
const notificationElement = document.querySelector('.notifications')

notificationController(notificationElement)
loginController(loginElement)
